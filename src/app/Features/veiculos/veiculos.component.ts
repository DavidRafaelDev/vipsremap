import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionarVeiculoComponent } from '../modal-adicionar-veiculo/modal-adicionar-veiculo.component';
import { inject } from '@angular/core/testing';
import { Router } from '@angular/router';



@Component({
  selector: 'app-clientes',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})

export class VeiculosComponent implements OnInit {

  veiculos: any[] = [];
  inputValue: string = "";

  constructor(private service: AppServiceService, private modalService: NgbModal, private route: Router) {
  }
  ngOnInit(): void {
    this.getVeiculos();
  }
  getVeiculos() {
    this.service.getVeiculos().subscribe((result: any) => {
      this.veiculos = result
      console.log(result)
    })
  }
  handlePesquisar() {
    if (this.inputValue === "") {
      this.getVeiculos()
    } else {
      console.log(this.inputValue);
      this.service.pesquisarVeiculo(this.inputValue).subscribe((result: any) => {
        this.veiculos = result;
      })
    }
  }
  openModal() {
    const modalRef = this.modalService.open(ModalAdicionarVeiculoComponent, { size: 'lg' });
    modalRef.result.then(() => {

      this.getVeiculos();

    })
  }
}










