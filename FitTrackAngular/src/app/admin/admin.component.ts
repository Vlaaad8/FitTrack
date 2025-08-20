import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { User } from '../models/user';
import { ServiceService } from '../service/service.service';
import { CommonModule } from '@angular/common';
import { ClassStatsComponent } from "./class-stats/class-stats.component";
import { AdminNavbarComponent } from "./admin-navbar/admin-navbar.component";
import { UserStatsComponent } from "./user-stats/user-stats.component";
import { AdminTrainingTableComponent } from "./admin-training-table/admin-training-table.component";
import { ModifyTrainingFormComponent } from "./modify-training-form/modify-training-form.component";
import { Training } from '../models/training';
import { AdminAddFormComponent } from "./admin-add-form/admin-add-form.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [NavbarComponent, CommonModule, ClassStatsComponent, AdminNavbarComponent, UserStatsComponent, AdminTrainingTableComponent, ModifyTrainingFormComponent, AdminAddFormComponent]
})
export class AdminComponent implements OnInit {


  user!: User;
  trainers!: string[];
  selectedTraining!: Training

  constructor(private service: ServiceService) { }

  ngOnInit() { 
    this.service.getTrainers().pipe(
      
    ).subscribe((data: string[])=>{
      this.trainers=data;
    })
  }

  handleModify($event: Training) {
  this.selectedTraining=$event;
}
handleFinishedModify($event: Training) {
  

}

}
