import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppServiceService } from 'src/app/shared/services/app-service.service';
import { ModalAdicionarRepresentanteComponent } from '../modal-adicionar-representante/modal-adicionar-representante.component';

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.css']
})
export class RepresentantesComponent implements OnInit {

  representantes: any[] = [];
  inputValue: string = "";

  constructor(private service: AppServiceService,private route: Router , private modalService:NgbModal ) {
  }
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
  openModal() {
    const modalRef = this.modalService.open(ModalAdicionarRepresentanteComponent, { size: 'lg' });
    modalRef.result.then(()=>{

      this.getRepresentantes();

     })
    }
  }