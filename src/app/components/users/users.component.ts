import {Component, OnInit} from '@angular/core';
import {UserPostComponent} from "../user-post/user-post.component";
import {IUser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {IPost} from "../../interface/post.interface";
import {UserComponent} from "../user/user.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserPostComponent,
    UserComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent   implements OnInit{
  users: IUser[]
  userPost: IPost

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getUser(userPost: IUser) {
    this.userPost = userPost
  }
}
