import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

    lojas: any[] = [];
    
    constructor(private service: AppServiceService){
    }
      ngOnInit(): void {
      this.getLojas();
      }
      getLojas(){
      this.service.getLojas().subscribe((result:any)=>{
      this.lojas = result
      console.log(result)
    
      })
    
    }}  
    
    
    






