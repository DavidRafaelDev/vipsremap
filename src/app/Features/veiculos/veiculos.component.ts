import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionarVeiculoComponent } from '../modal-adicionar-veiculo/modal-adicionar-veiculo.component';
import { inject } from '@angular/core/testing';



@Component({
  selector: 'app-clientes',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})

export class VeiculosComponent implements OnInit {

  veiculos: any[] = [];

  constructor(private service: AppServiceService, private modalService:NgbModal) {
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
  openModal() {
    const modalRef = this.modalService.open(ModalAdicionarVeiculoComponent, { size: 'lg' });
    modalRef.result.then(()=>{

      this.getVeiculos();

    })
  }
}










