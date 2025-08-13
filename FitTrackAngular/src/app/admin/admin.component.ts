import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { User } from '../models/user';
import { ServiceService } from '../service/service.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [NavbarComponent]
})
export class AdminComponent implements OnInit {
  user!: User

  constructor(private service: ServiceService,private sharedService: SharedService) { }

  ngOnInit() {
    this.user=this.sharedService.getUser(); 
    console.log(this.user);

  }

}
