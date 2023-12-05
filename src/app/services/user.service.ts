import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interface/user.interface";
import {urls} from "../constant/urls";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users.base)
  }

  getById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(urls.users.byId(id))
  }
}
