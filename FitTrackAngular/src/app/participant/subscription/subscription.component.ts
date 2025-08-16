import { Component, OnInit } from '@angular/core';
import { Subscription, User } from '../../models/user';
import { Reservation } from '../../models/reservation';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SharedService } from '../../service/shared.service';
import { ServiceService } from '../../service/service.service';
import { ListComponent } from "./list/list.component";
import { ComponentResourceCollector } from '@angular/cdk/schematics';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  imports: [NavbarComponent, ListComponent]
})
export class SubscriptionComponent implements OnInit {

  subscription!: Subscription;
  user!: User;

  constructor(private sharedService: SharedService,private service: ServiceService) {
    this.user=this.sharedService.getUser();
  
    console.log(this.user)
  }
   

  ngOnInit() {
    console.log(this.subscription)
    this.service.getSubscription(this.user.id).subscribe({
      next: (s)=> this.subscription=s,
      error: (e) => console.error(e)
    })
  }
}
