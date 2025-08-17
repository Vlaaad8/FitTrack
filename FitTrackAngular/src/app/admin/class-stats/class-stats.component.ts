import { CommonModule } from '@angular/common';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ServiceService } from '../../service/service.service';
import { R } from '@angular/cdk/keycodes';
import { forkJoin, switchMap } from 'rxjs';
import { setEmitFlags } from 'typescript';
Chart.register(...registerables)
@Component({
  selector: 'app-class-stats',
  templateUrl: './class-stats.component.html',
  styleUrls: ['./class-stats.component.css'],
  imports: [CommonModule]
})
export class ClassStatsComponent implements OnInit {

  trainers! : string[];
  chart!: any;

  reservedSlots!: number;
  emptySlots!: number;

  selectedTrainer! : string;

updateChart($event: any) {
  this.selectedTrainer=$event.target.value;
  console.log(this.selectedTrainer)

  forkJoin({
   empty: this.service.getTrainerEmptySlots(this.selectedTrainer),
   reserved: this. service.getTrainerReservedSlots(this.selectedTrainer)}).subscribe((data: any)=>{

    this.emptySlots=data.empty,
    this.reservedSlots=data.reserved;
    if(this.chart){
      console.log(this.emptySlots)
      console.log(this.reservedSlots)
      this.chart.destroy();
    }
    this.chart = new Chart('myChart', this.createConfig());
   })
}

  constructor(private service: ServiceService) { }

  createConfig() : any {
    const data : any = {
  labels: [
    'Reserved',
    'Empty',
  ],
  datasets: [{
    label: 'Seats',
    data: [this.reservedSlots,this.emptySlots],
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
}
  }
  

ngOnInit() {
  this.service.getTrainers()
    .pipe(
      switchMap((trainers: string[]) => {
        this.trainers = trainers;
        this.selectedTrainer = trainers[0]

        // combină cele două apeluri pentru reserved și empty slots
        return forkJoin({
          reserved: this.service.getTrainerReservedSlots(this.selectedTrainer),
          empty: this.service.getTrainerEmptySlots(this.selectedTrainer)
        });
      })
    )
    .subscribe((slots: any) => {
      if (slots) {
        this.reservedSlots = slots.reserved;
        this.emptySlots = slots.empty;
        this.chart = new Chart('myChart', this.createConfig());
      }
    });
}

  }




