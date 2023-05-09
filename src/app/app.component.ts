import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import Chart from 'chart.js/auto';
import { TowersCell } from './TowersCell';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'byanatchallenge';
  title2 = 'ng-chart';
  
  chart: any = [];
  result: any;
 


  constructor(private rs : RestService){}

  columns = [" tower_id", "operator", "address", "height", "tower_type", "latitude", "longitude", "technology"];

  index = ["tower_id", "operator", "address", "height", "tower_type", "latitude", "longitude", "technology"];

  towersCell : TowersCell[] = [];

  ngOnInit(): void {
    this.rs.getTowersCell().subscribe
    (
      (response)=>
      {
        this.towersCell = response;
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
 



  this.chart = new Chart('canvas', {
    type: 'bar',
    data: {
      labels: ['2G', '3G', '4G', '5G'],
      datasets: [
        {
          label: '# of Votes',
          data: [50, 50, 50, 50, 49],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

}

}
