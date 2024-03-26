import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { AppServiceService } from 'src/app/shared/services/app-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router, private service:AppServiceService ) { }
  clientes: number = 0;
  veiculos: number = 0;

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
  async ngOnInit() {
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
    await this.getClients();
    await this.getVeiculos();
  }
  addServico() {
    this.route.navigate(["/", "servico"])
  }
  getProfit(){
    // TODO: validiar regra para buscar lucro
  }

  async getClients(){
    await this.service.getClientes().subscribe((result) => {
      this.clientes = result.length;
    });
  }

  async getVeiculos(){
    await this.service.getVeiculos().subscribe((result) => {
      this.veiculos = result.length;
    })
  }
}

