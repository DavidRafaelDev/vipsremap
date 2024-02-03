import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { ModalAdicionarLojaComponent } from '../modal-adicionar-produtoloja/modal-adicionar-produtoloja.component';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clientes',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

    lojas: any[] = [];
    
    constructor(private service: AppServiceService, private modalService:NgbModal){
    }
      ngOnInit(): void {
      this.getLojas();
      }
      getLojas(){
      this.service.getLojas().subscribe((result:any)=>{
      this.lojas = result
      console.log(result)
    })
  }
      openModal() {
        const modalRef = this.modalService.open(ModalAdicionarLojaComponent, { size: 'lg' });
        modalRef.result.then(()=>{
          this.getLojas();
        })
    }}  
    
    
    






