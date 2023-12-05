import {Component, Input} from '@angular/core';
import {IPost} from "../../interface/post.interface";

@Component({
  selector: 'app-user-post',
  standalone: true,
  imports: [],
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.css'
})
export class UserPostComponent {
  @Input()
  userPosts: IPost

}
