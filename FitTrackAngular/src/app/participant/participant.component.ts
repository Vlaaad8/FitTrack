import { Component, Input, OnInit } from '@angular/core';
import { Subscription, User } from '../models/user';
import { Router } from '@angular/router';
import { share } from 'rxjs';
import { NgIf } from '@angular/common';
import { TrainingTableComponent } from "./training-table/training-table.component";
import { NavbarComponent } from "../navbar/navbar.component";
import {MatTableModule} from '@angular/material/table';
import { AdminClassOcopyComponent } from "../admin/admin-class-ocopy/admin-class-ocopy.component";
@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css'],
  imports: [NgIf, TrainingTableComponent, NavbarComponent, MatTableModule, AdminClassOcopyComponent]
})
export class ParticipantComponent implements OnInit{

  user!: User

  constructor(private router: Router) { }

  ngOnInit() {
    const storedUser = sessionStorage.getItem("loggedUser")
    if(storedUser){
    this.user=JSON.parse(storedUser);
    }
  }


}
