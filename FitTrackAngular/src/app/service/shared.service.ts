import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { User,Subscription } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userSubject = new BehaviorSubject<User>({id:0,
    username: "",
    password: "",
    lastName: "",
    firstName: "",
    email: "",
    role: ""
  });


  private subscriptionSubject=new BehaviorSubject<Subscription>({
    id:0,
    type: "",
    startDate: new Date('2020-10-23'),
    endDate: new Date('2020-10-23'),
    user: {id:0,
    username: "",
    password: "",
    lastName: "",
    firstName: "",
    email: "",
    role: ""
  }

  })
  user$ = this.userSubject.asObservable();
  subscription$=this.subscriptionSubject.asObservable();

  setUser(user: User) {
    this.userSubject.next(user);
  }

  getUser(): User {
    return this.userSubject.getValue();
  }

  setSub(user: Subscription) {
    this.subscriptionSubject.next(user);
  }

  getSub(): Subscription {
     return this.subscriptionSubject.getValue();
  }


constructor() { }

}
