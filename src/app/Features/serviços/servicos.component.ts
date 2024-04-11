import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
  providers: [DatePipe]
})
export class ServicosComponent implements OnInit {
  servicos: any[] = [];
  inputValue: string = "";
  produtoService: any;

  constructor(private service: AppServiceService, private route: Router, private datePipe: DatePipe) { }
  adicionarServico: any = {};

  ngOnInit(): void {
    this.getServicos();
  }

  addServico() {
    this.route.navigate(["/", "servico"])
  }

  getServicos() {
    this.service.getServicos().subscribe((result: any) => {
      this.servicos = result
    })
  }
  
  handlePesquisar() {
    if (this.inputValue === "") {
      this.getServicos()
    } else {
      console.log(this.inputValue);
      this.service.pesquisarRepresentante(this.inputValue).subscribe((result: any) => {
        this.servicos = result;
      })
    }
  }
  handleDate(data: Date) {
    return this.datePipe.transform(data, 'dd/MM/yyyy HH:mm')
  }
  
  removeHandler(id: number) {
    console.log('teste');
     this.service.excluirServico(id).subscribe({
      next: () => this.getServicos()
    });
  }

}







