import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { ModalAdicionarClienteComponent } from '../modal-adicionar-cliente/modal-adicionar-cliente-component';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: any[] = [];
  inputValue: string = "";

  constructor(private service: AppServiceService, private modalService: NgbModal, private route: Router) {
  }

  ngOnInit(): void {
    this.getClientes();
  }
  getClientes() {
    this.service.getClientes().subscribe((result: any) => {
      this.clientes = result
      console.log(result)
    })
  }
  addCliente() {
    this.route.navigate(["/", "clientes"])
  }
  handlePesquisar() {
    if (this.inputValue === "") {
      this.getClientes()
    } else {
      console.log(this.inputValue);
      this.service.pesquisarCliente(this.inputValue).subscribe((result: any) => {
        this.clientes = result
      })
    }
  }
  openModal() {
    const modalRef = this.modalService.open(ModalAdicionarClienteComponent, { size: 'lg' });
    modalRef.result.then(() => {
      this.getClientes();
    })
  }
  removeHandler(id: number) {
    this.service.excluirServico(id).subscribe({
      next: () => this.getClientes()
    });
  }
}









