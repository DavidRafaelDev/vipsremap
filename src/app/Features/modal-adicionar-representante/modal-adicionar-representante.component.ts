import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-adicionar-representante',
  templateUrl: './modal-adicionar-representante.component.html',
  styleUrls: ['./modal-adicionar-representante.component.css']
})
export class ModalAdicionarRepresentanteComponent {

  constructor(private appService: AppServiceService) { }


  showErroAlert = false;
  novorepresentante : any = {};
  equipamentos = ['Genius', 'Trasdata', 'Kzprog', 'Inline']
  showSuccess = false
  showError = false


  onSubmit() {
    console.log(this.novorepresentante);
    this.appService.adicionarRepresentante(this.novorepresentante).subscribe(() => {
      this.novorepresentante = {};
      this.showSuccess = true
    });
  }

    
  closeSuccess(){
    this.showSuccess = false;
  }
  closeError(){
    this.showSuccess = false;
  }
}
