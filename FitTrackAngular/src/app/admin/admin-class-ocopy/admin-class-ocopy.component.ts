import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';
import { switchMap } from 'rxjs';
import { CdkNoDataRow } from "@angular/cdk/table";

@Component({
  selector: 'app-admin-class-ocopy',
  templateUrl: './admin-class-ocopy.component.html',
  styleUrls: ['./admin-class-ocopy.component.css'],
  imports: [CommonModule, CdkNoDataRow]
})
export class AdminClassOcopyComponent implements OnInit {
  titles!: string[];
  selectedTitle!: string;
  occupiedSeats!: number;
  emptySeats!: number;
  chart!: any;
  occupyRatio!: number;

  constructor(public service: ServiceService) { }

  ngOnInit() {
    this.service.getTrainingTitles().pipe(
      switchMap(data => {
      this.titles=data;
      console.log(this.titles[0])
      this.selectedTitle=this.titles[0];
      return this.service.getClassOcupyData(this.selectedTitle);
      })).subscribe((data: number[])=>[
        this.occupiedSeats=data[0],
        this.emptySeats=data[1],
        this.occupyRatio=this.occupiedSeats/(this.occupiedSeats+this.emptySeats)*100,
        this.chart=new Chart('classOcupy',this.createConfig())
      ])
  }

  createConfig() : any {
    const data : any = {
  labels: [
    'Occupied',
    'Empty'
  ],
  datasets: [{
    label: 'Count',
    data: [this.occupiedSeats,this.emptySeats],
    backgroundColor: [
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
    ,
    maintainAspectRatio: false
  }
    
  }
}
  
handleChange($event: any) {
  this.selectedTitle=$event.target.value;
  console.log(this.selectedTitle)
  this.service.getClassOcupyData(this.selectedTitle).subscribe((data)=>{
    this.occupiedSeats=data[0],
    this.emptySeats=data[1];
    this.occupyRatio=this.occupiedSeats/(this.occupiedSeats+this.emptySeats)*100
  if(this.chart){
    this.chart.destroy();
    this.chart=new Chart('classOcupy',this.createConfig())
  }
});
}
}
