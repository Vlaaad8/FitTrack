import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { User } from '../models/user';
import { ServiceService } from '../service/service.service';
import { CommonModule } from '@angular/common';
import { ClassStatsComponent } from "./class-stats/class-stats.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [NavbarComponent, CommonModule, ClassStatsComponent]
})
export class AdminComponent implements OnInit {

  user!: User;
  trainers!: string[];

  constructor(private service: ServiceService) { }

  ngOnInit() { 
    this.service.getTrainers().pipe(
      
    ).subscribe((data: string[])=>{
      this.trainers=data;
    })
  }

}
