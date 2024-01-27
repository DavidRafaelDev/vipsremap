import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
servicos: any[] = [];

constructor(private service: AppServiceService){}
adicionarServico: any = {};

  ngOnInit(): void {
  this.getServicos();
}
  getServicos(){
  this.service.getServicos().subscribe((result:any)=>{
  this.servicos = result
  console.log('teste',result)
  })

}}  








