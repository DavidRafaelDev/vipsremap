import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';

@Component({
  selector: 'app-add-servico',
  templateUrl: './add-servico.component.html',
  styleUrls: ['./add-servico.component.css']
})
export class AddServicoComponent {

  constructor(private appService: AppServiceService) { }

  novoServico: any = {}

  dadosFormulario = {
    id: 1,
    cliente: '',
    veiculo: '',
    servico: '',
    representante: '',
    TME: '',
    custo: '',
    pedido: '',
    envio: '',
    finalizacao: ''
  };
  onSubmit() {
    this.appService.adicionarServico(this.novoServico).subscribe(() => {
      console.log('Serviço adicionado com sucesso!');
      this.novoServico = {};
    });
   }}

