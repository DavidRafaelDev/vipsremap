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
login(login: string , senha: string): Observable<any>{
  return this.http.get(`https://vipremap-2640a0fa50a5.herokuapp.com/representantes?primeiro_nome=${login}&senha=${senha}`)
}

}
