import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { ModalAdicionarLojaComponent } from '../modal-adicionar-produtoloja/modal-adicionar-produtoloja.component';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  lojas: any[] = [];
  inputValue: string = "";
  constructor(private service: AppServiceService, private modalService: NgbModal, private route: Router) {
  }
  ngOnInit(): void {
    this.getLojas();
  }
  getLojas() {
    this.service.getLojas().subscribe((result: any) => {
      this.lojas = result
      console.log(result)
    })
  }
  openModal() {
    const modalRef = this.modalService.open(ModalAdicionarLojaComponent, { size: 'lg' });
    modalRef.result.then(() => {
      this.getLojas();
    })
  }
    handlePesquisar() {
      if (this.inputValue === "") {
        this.getLojas()
      } else {
        console.log(this.inputValue);
        this.service.pesquisarCliente(this.inputValue).subscribe((result: any) => {
          this.lojas = result
        })
      }
    }
    removeHandler(id: number) {
      this.service.excluirprodutoloja(id).subscribe({
        next: () => this.getLojas()
      });
    }

}











