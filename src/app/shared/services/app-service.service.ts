import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppServiceService {

  representante: any = null;
  horaAtual: any;
  dataAtual: any;

  constructor(private http: HttpClient) { }


  login(login: string, senha: string): Observable<any> {

    this.representante = this.http.get(`https://respapiremap.onrender.com/representantes?primeiro_nome=${login}&senha=${senha}`);
    return this.representante;
  }

  getNomeUsuario(): string {
    console.log(this.representante)
    return this.representante;
  }
  setNomeUsuario(nomeusuario: string) {

    this.representante = nomeusuario;
  }
  getRepresentante() {
    return this.representante;
  }

  getRepresentantes(): Observable<any> {
    return this.http.get('https://respapiremap.onrender.com/representantes')
  }

  excluirRepresentante(id: number): Observable<any> {
    return this.http.delete(`https://respapiremap.onrender.com/representantes/${id}`);
  }
  getServicos(): Observable<any> {
    return this.http.get('https://respapiremap.onrender.com/servicos')
  }
  // adicionar serviço
  adicionarServico(servico: any): Observable<any> {
    return this.http.post('https://respapiremap.onrender.com/servicos', servico);
  }
  excluirServico(id: number): Observable<any> {
    return this.http.delete(`https://respapiremap.onrender.com/servicos/${id}`);
  }
  // pesquisarServico(id: string): Observable<any> {  return this.http.get(`https://respapiremap.onrender.com/id?veiculo=${id}`)}

  // get cliente
  getClientes(): Observable<any> {
    return this.http.get('https://respapiremap.onrender.com/clientes')
  }
  excluirCliente(id: number): Observable<any> {
    return this.http.delete(`https://respapiremap.onrender.com/clientes/${id}`);
  }
  // adicionar cliente
  adicionarcliente(cliente: any): Observable<any> {
    return this.http.post('https://respapiremap.onrender.com/clientes', cliente);
  }
  getVeiculos(): Observable<any> {
    return this.http.get('https://respapiremap.onrender.com/veiculos')
  }
  // adicionar veiculo
  adicionarveiculo(veiculos: any): Observable<any> {
    return this.http.post(`https://respapiremap.onrender.com/veiculos`, veiculos);
  }
  excluirVeiculo(id: number): Observable<any> {
    return this.http.delete(`https://respapiremap.onrender.com/veiculos/${id}`);
  }
  getLojas(): Observable<any> {
    return this.http.get('https://respapiremap.onrender.com/loja')
  }
  adicionarprodutoloja(loja: any): Observable<any> {
    return this.http.post('https://respapiremap.onrender.com/loja', loja)
  }
  excluirprodutoloja(id: number): Observable<any> {
    return this.http.delete(`https://respapiremap.onrender.com/loja/${id}`)
  }
  pesquisarRepresentante(primeiro_nome: string): Observable<any> {
    return this.http.get(`https://respapiremap.onrender.com/representantes?primeiro_nome=${primeiro_nome}`)
  }
  pesquisarCliente(nome_completo: string): Observable<any> {
    return this.http.get(`https://respapiremap.onrender.com/clientes?nome_completo=${nome_completo}`)
  }
  adicionarRepresentante(representantes: any): Observable<any> {
    return this.http.post(`https://respapiremap.onrender.com/representantes`, representantes)
  }
  pesquisarVeiculo(placa: any): Observable<any> {
    return this.http.get(`https://respapiremap.onrender.com/veiculos?placa=${placa}`)
  }
  buscarRepresentante(): Observable<any> {
    return this.http.get(`https://respapiremap.onrender.com/representantes`)
  }

}
