import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/shared/services/app-service.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
servicos: any[] = [];

constructor(private service: AppServiceService , private route: Router){}
adicionarServico: any = {};

  ngOnInit(): void {
  this.getServicos();
}

addServico() {
  this.route.navigate(["/", "servico"])
}

  getServicos(){
  this.service.getServicos().subscribe((result:any)=>{
  this.servicos = result
  console.log('teste',result)
  })

}}  







