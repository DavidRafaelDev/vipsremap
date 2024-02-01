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
getClientes(): Observable<any>{
   return this.http.get('https://vipremap-2640a0fa50a5.herokuapp.com/clientes')
}
getVeiculos(): Observable<any>{
  return this.http.get('https://vipremap-2640a0fa50a5.herokuapp.com/veiculos')
}
 adicionarServico(servico: any): Observable<any> {
  return this.http.post('https://vipremap-2640a0fa50a5.herokuapp.com/servicos', servico);
}
getLojas():Observable<any>{
  return this.http.get ('https://vipremap-2640a0fa50a5.herokuapp.com/loja')
}

login(login: string , senha: string): Observable<any>{
  return this.http.get(`https://vipremap-2640a0fa50a5.herokuapp.com/representantes?primeiro_nome=${login}&senha=${senha}`)
}
adicionarveiculo(veiculos: any): Observable<any> {
  return this.http.post(`https://vipremap-2640a0fa50a5.herokuapp.com/veiculos`,veiculos);
}
}
