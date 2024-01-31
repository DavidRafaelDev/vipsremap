import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

    veiculos: any[] = [];
    
    constructor(private service: AppServiceService){
    }
      ngOnInit(): void {
      this.getVeiculos();
      }
      getVeiculos(){
      this.service.getVeiculos().subscribe((result:any)=>{
      this.veiculos = result
      console.log(result)
    
      })
    
    }}  
    
    
    






