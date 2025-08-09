import { Component, Input, OnInit } from '@angular/core';
import { Subscription, User } from '../models/user';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';
import { share } from 'rxjs';
import { NgIf } from '@angular/common';
import { TrainingTableComponent } from "./training-table/training-table.component";

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css'],
  imports: [NgIf, TrainingTableComponent]
})
export class ParticipantComponent implements OnInit {

  user!: User
  subsription!: Subscription;
  isActive!: boolean;

  constructor(private router: Router,private sharedService:SharedService) { }

  ngOnInit() {
    this.user=this.sharedService.getUser();
    this.subsription=this.sharedService.getSub();
    this.isActive=false;
  }

  handleSubcription() {
    this.isActive=true;
    
  
}

}
