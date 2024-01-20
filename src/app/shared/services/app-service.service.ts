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
}
