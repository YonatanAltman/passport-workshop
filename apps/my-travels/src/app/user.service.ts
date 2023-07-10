import {Injectable} from '@angular/core';
import {User} from "./common/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser?: User;

  constructor() {
  }

  setUser(user: User): void {
    this.currentUser = user;
  }
}
