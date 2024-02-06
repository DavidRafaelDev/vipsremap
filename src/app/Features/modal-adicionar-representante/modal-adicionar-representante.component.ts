import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-adicionar-representante',
  templateUrl: './modal-adicionar-representante.component.html',
  styleUrls: ['./modal-adicionar-representante.component.css']
})
export class ModalAdicionarRepresentanteComponent {

  showErroAlert = false;
  representantes = { id: 0, primeiro_nome: '', departamento: ''  , habilitacao: ''  , lucro: "", equipamentos: ''};
  
  constructor(private service: AppServiceService, private activeModal: NgbActiveModal) { }

  handleCloseModal() {
    this.activeModal.close();
  }
  handleErrorModal() {
    this.showErroAlert = true;
  }
  adicionarRepresentante() {
    this.service.adicionarRepresentante(this.representantes).subscribe(
      {
        next: this.handleCloseModal.bind(this),
        error: this.handleErrorModal.bind(this)
      }

    );
  }
}
