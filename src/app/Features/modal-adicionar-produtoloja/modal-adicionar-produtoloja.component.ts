
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component ({
    selector: 'app-modal-adicionar-cliente',
    templateUrl: 'modal-adicionar-produtoloja.component.html',
    styleUrls: ['./modal-adicionar-produtoloja.component.css']
})

export class ModalAdicionarLojaComponent{

    showErroAlert = false;
    loja = { id: 0 , pedal: '', downpipe: '', filtro: ' ' , cabo: ' ' , outros: ' ' };

    constructor( private service: AppServiceService, private activeModal: NgbActiveModal){}

    handleCloseModal() {
        this.activeModal.close();
    }
    handleErrorModal(){
        this.showErroAlert = true;
    }
    adicionarprodutoloja(){
        this.service.adicionarprodutoloja(this.loja).subscribe({
            next: this.handleCloseModal.bind(this),
            error: this.handleErrorModal.bind(this)
        });
        }
    }



