import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private route: Router) { }

  chart: any = [];
  data =  {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Serviços admin',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
      {
        label: 'Serviços admin2',
        data: [10, 15, 20, 30, 40, 10],
        borderWidth: 1,
      },
    ],
  };
  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: this.data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  addServico() {
    this.route.navigate(["/", "servico"])
  }
}

