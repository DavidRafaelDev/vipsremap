import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { ModalAdicionarRepresentanteComponent } from '../modal-adicionar-representante/modal-adicionar-representante.component';

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.css'],
  providers: [DatePipe]
})
export class RepresentantesComponent implements OnInit {

  constructor(private service: AppServiceService, private route: Router, private modalService: NgbModal, private datePipe: DatePipe) {}

  representantes: any[] = [];
  inputValue: string = "";

    
  ngOnInit(): void {
    this.getRepresentantes();
  }
  getRepresentantes() {
    this.service.getRepresentantes().subscribe((result: any) => {
      this.representantes = result
      console.log(result)
    })
  }
  handlePesquisar() {
    if (this.inputValue === "") {
      this.getRepresentantes()
    } else {
      console.log(this.inputValue);
      this.service.pesquisarRepresentante(this.inputValue).subscribe((result: any) => {
        this.representantes = result;
      })
    }
  }
  handleDate(data: Date) {
    return this.datePipe.transform(data, 'dd/MM/yyyy')
  }

 addRepresentante(){
  this.route.navigate(["/","representanteadc"]) 
}

  openModal() {
    const modalRef = this.modalService.open(ModalAdicionarRepresentanteComponent, { size: 'lg' });
    modalRef.result.then(() => {
      this.getRepresentantes();
    })

  }
  removeHandler(id: number) {
    this.service.excluirRepresentante(id).subscribe({
      next: () => this.getRepresentantes()
    });
  }

}