import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { User,Subscription } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private user!: User
  

  setUser(user: User) {
    console.log('S-a logat ' + user)
    this.user=user;
  }

  getUser(): User {
    return this.user;
  }


constructor() { }

}
