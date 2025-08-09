import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { User,Subscription } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private user!: User
  private subscription!: Subscription
  

  setUser(user: User) {
    this.user=user;
  }

  getUser(): User {
    return this.user;
  }

  setSub(subscription: Subscription) {
    this.subscription=subscription;
  }

  getSub(): Subscription {
     return this.subscription;
  }

constructor() { }

}
