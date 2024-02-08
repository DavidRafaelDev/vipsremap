import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {


constructor(private http: HttpClient) { }

getRepresentantes(): Observable<any>{
  return this.http.get('https://vipremap-2640a0fa50a5.herokuapp.com/representantes')
  }
getServicos(): Observable<any>{
  return this.http.get('https://vipremap-2640a0fa50a5.herokuapp.com/servicos')
}
// adicionar serviço
adicionarServico(servico: any): Observable<any> {
  return this.http.post('https://vipremap-2640a0fa50a5.herokuapp.com/servicos', servico);
}
// get cliente
getClientes(): Observable<any>{
   return this.http.get('https://vipremap-2640a0fa50a5.herokuapp.com/clientes')
}
// adicionar cliente
adicionarcliente(cliente: any): Observable<any>{
  return this.http.post('https://vipremap-2640a0fa50a5.herokuapp.com/clientes',cliente);
}
// get cliente
getVeiculos(): Observable<any>{
  return this.http.get('https://vipremap-2640a0fa50a5.herokuapp.com/veiculos')
}
// adicionar veiculo
adicionarveiculo(veiculos: any): Observable<any> {
  return this.http.post(`https://vipremap-2640a0fa50a5.herokuapp.com/veiculos`,veiculos);
}
getLojas():Observable<any>{
  return this.http.get('https://vipremap-2640a0fa50a5.herokuapp.com/loja')
}
adicionarprodutoloja(loja: any): Observable<any> {
  return this.http.post('https://vipremap-2640a0fa50a5.herokuapp.com/loja', loja)
}
login(login: string , senha: string): Observable<any>{
  return this.http.get(`https://vipremap-2640a0fa50a5.herokuapp.com/representantes?primeiro_nome=${login}&senha=${senha}`)
}
pesquisarRepresentante(primeiro_nome: string) : Observable<any>{
  return this.http.get(`https://vipremap-2640a0fa50a5.herokuapp.com/representantes?primeiro_nome=${primeiro_nome}`)
}
pesquisarCliente(nome_completo: string) : Observable<any>{
  return this.http.get(`https://vipremap-2640a0fa50a5.herokuapp.com/clientes?nome_completo=${nome_completo}`)
}
adicionarRepresentante(representantes: any): Observable <any> {
  return this.http.post(`https://vipremap-2640a0fa50a5.herokuapp.com/representantes`, representantes)
}
PesquisarVeiculo( placa: any) : Observable<any>{
  return this.http.get(`https://vipremap-2640a0fa50a5.herokuapp.com/veiculos?placa=${placa}`)
}
}
