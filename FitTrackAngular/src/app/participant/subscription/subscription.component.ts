import { Component, OnInit } from '@angular/core';
import { Subscription, User } from '../../models/user';
import { Reservation } from '../../models/reservation';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SharedService } from '../../service/shared.service';
import { ServiceService } from '../../service/service.service';
import { ListComponent } from "./list/list.component";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  imports: [NavbarComponent, ListComponent]
})
export class SubscriptionComponent implements OnInit {

  subscription!: Subscription;
  reservations!: Reservation[];
  user!: User;

  constructor(private sharedService: SharedService,private service: ServiceService) { }

  ngOnInit() {
    this.subscription=this.sharedService.getSub();
    this.user=this.sharedService.getUser();
    this.service.getUserRegistrations(this.user.id).subscribe({
      next: r => this.reservations=r,
      error: e =>  console.error(e)
    })

  }

}
