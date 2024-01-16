import { Component } from '@angular/core';

@Component({
  selector: 'app-add-servico',
  templateUrl: './add-servico.component.html',
  styleUrls: ['./add-servico.component.css']
})
export class AddServicoComponent {
  dadosFormulario = {
    id: 1,
    cliente: '',
    veiculo: '',
    representante: '',
    TME: '',
    custo: '',
    pedido: '',
    envio: '',
    finalizacao: ''
  };

  onSubmit() {
    console.log('enviar formulario');
  }
}
