import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-adicionar-veiculo',
  templateUrl: 'modal-adicionar-veiculo.component.html',
  styleUrls: ['./modal-adicionar-veiculo.component.css']
})
export class ModalAdicionarVeiculoComponent {

  showErroAlert = false;
  veiculo = { id: 0, categoria: '', modelo: ''  , marca: ''  , placa: ''  , ano: '' };
  
  constructor(private service: AppServiceService, private activeModal: NgbActiveModal) { }


  handleCloseModal() {
    this.activeModal.close();
  }
  handleErrorModal() {
    this.showErroAlert = true;
  }
  adicionarveiculo() {
    this.service.adicionarveiculo(this.veiculo).subscribe(
      {
        next: this.handleCloseModal.bind(this),
        error: this.handleErrorModal.bind(this)
      }

    );
  }
}
