import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ServiceService } from '../../service/service.service';
import { Chart } from 'chart.js';
import { A } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit {

  activeUsers!: number;
  inactiveUsers!: number;
  chart!: any;

  constructor(public service: ServiceService) { }

  ngOnInit() {
    forkJoin({
      active: this.service.getActiveUsers(),
      inactive: this.service.getAllUsers()
    })
    .subscribe((data: any) => {
      this.activeUsers=data.active;
      this.inactiveUsers=data.inactive-this.activeUsers;
      this.chart=new Chart("userChart",this.createConfig())
    })
  }

  createConfig() : any {
    const data : any = {
  labels: [
    'Active',
    'Inactive',
  ],
  datasets: [{
    label: 'Users',
    data: [this.activeUsers,this.inactiveUsers],
    backgroundColor: [
      'rgba(125, 219, 75, 1)',
      'rgba(215, 166, 30, 1)',
    ],
    hoverOffset: 4
  }]
}
  return  {
  type: 'pie',
  data: data,
    options: {
    maintainAspectRatio: false
  }
}
  }

}
