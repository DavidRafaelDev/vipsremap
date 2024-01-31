import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

    clientes: any[] = [];
    
    constructor(private service: AppServiceService){
    }
      ngOnInit(): void {
      this.getClientes();
      }
    getClientes(){
      this.service.getClientes().subscribe((result:any)=>{
      this.clientes = result
      console.log(result)
    
      })
    
    }}  
    
    
    






