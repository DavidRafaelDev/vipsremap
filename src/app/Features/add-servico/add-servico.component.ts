import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';


@Component({
  selector: 'app-add-servico',
  templateUrl: './add-servico.component.html',
  styleUrls: ['./add-servico.component.css']
})

export class AddServicoComponent implements OnInit {


  constructor(private appService: AppServiceService) { }

  horaAtual: string[] = [];
  dataAtual: string[] = [];


  novoServico: any = {}
  representantesName: string[] = []
  tipoServicos = ['Dpf e Egr Off', 'Dpf, Egr e bomba off', 'Dpf, Egr, bomba e arla off', 'Stage 1', 'Stage 2', 'Stage rally', 'Potência', 'Potência e Arla', 'Mapa Original']
  equipamentos = ['Genius', 'Trasdata', 'Kzprog', 'Inline']
  acessorios = ['Agro, Auto', 'Diesel leve', 'Diesel pesado', 'Moto' , 'Naútica']
  estados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins']
  
  showSuccess = false
  showError = false

  ngOnInit(): void {

    this.representantesName.push(this.appService.getNomeUsuario())
    console.log(this.appService.getNomeUsuario())
  }

  onSubmit() {
    console.log(this.novoServico);
    this.appService.adicionarServico(this.novoServico).subscribe(() => {
      this.novoServico = {};
      this.showSuccess = true;
    });
  }
  obterHoraAtual(): string {
    const now = new Date();
    return now.toLocaleTimeString();
  }
  
  closeSuccess() {
    this.showSuccess = false;
  }
  closeError() {
    this.showSuccess = false;
  }
}

