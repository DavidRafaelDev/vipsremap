import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { ModalAdicionarClienteComponent } from '../modal-adicionar-cliente/modal-adicionar-cliente-component';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

    clientes: any[] = [];
    
    constructor(private service: AppServiceService, private modalService:NgbModal){
    }
      ngOnInit(): void {
      this.getClientes();
      }
    getClientes(){
      this.service.getClientes().subscribe((result:any)=>{
      this.clientes = result
      console.log(result)
      })
    }
    openModal() {
    const modalRef = this.modalService.open(ModalAdicionarClienteComponent, { size: 'lg' });
    modalRef.result.then(()=>{
      this.getClientes();
      })    
    }}  
    
    
    






