import { Component, Input, OnInit } from '@angular/core';
import { Subscription, User } from '../models/user';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';
import { share } from 'rxjs';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  user!: User
  subsription!: Subscription;

  constructor(private router: Router,private sharedService:SharedService) { }

  ngOnInit() {
    this.user=this.sharedService.getUser();
    this.subsription=this.sharedService.getSub();
  }

  handleSubcription() {
  
}

}
