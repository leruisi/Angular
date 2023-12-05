import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../interface/user.interface";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  user: IUser

  @Output()
  lift = new EventEmitter<IUser>();

  getPosts(): void {
    this.lift.emit(this.user)
  }
}
