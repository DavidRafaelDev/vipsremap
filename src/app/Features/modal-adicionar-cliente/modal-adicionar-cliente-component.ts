
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component ({
    selector: 'app-modal-adicionar-cliente',
    templateUrl: 'modal-adicionar-cliente.component.html',
    styleUrls: ['./modal-adicionar-cliente-component.css']
})

export class ModalAdicionarClienteComponent{

    showErroAlert = false;
    cliente = { id: 0 , nome_completo: '', CPF: '', Telefone: ' ' , Cidade: ' ' , Estado: ' ' };

    constructor( private service: AppServiceService, private activeModal: NgbActiveModal){}

    handleCloseModal() {
        this.activeModal.close();
    }
    handleErrorModal(){
        this.showErroAlert = true;
    }
    adicionarcliente(){
        this.service.adicionarcliente(this.cliente).subscribe({
            next: this.handleCloseModal.bind(this),
            error: this.handleErrorModal.bind(this)
        });
        }
    }



