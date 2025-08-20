import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admin-user-role-stat',
  templateUrl: './admin-user-role-stat.component.html',
  styleUrls: ['./admin-user-role-stat.component.css']
})
export class AdminUserRoleStatComponent implements OnInit {
  admin!:number;
  trainer!:number;
  participant!:number;
  chart!: any;

  constructor(public service: ServiceService) { }

  ngOnInit() {
    this.service.getUserRoleCount().subscribe((data: number[])=>{
      this.participant=data[0],
      this.admin=data[1],
      this.trainer=data[2],
      this.chart=new Chart("userRoleChart",this.createConfig())
    })
    
  }

  createConfig() : any {
    const data : any = {
  labels: [
    'Participant',
    'Admin',
    'Trainer'
  ],
  datasets: [{
    label: 'Count',
    data: [this.participant,this.admin,this.trainer],
    backgroundColor: [
     ' rgba(227, 76, 65, 1)',
      'rgba(125, 219, 75, 1)',
      'rgba(215, 166, 30, 1)',
    ],
    hoverOffset: 4
  }]
}
  return  {
  type: 'bar',
  data: data,
  options:{
    scales:{
      y:{
        beginAtZero:true
      }
    }
    
  }
}
  }

}

