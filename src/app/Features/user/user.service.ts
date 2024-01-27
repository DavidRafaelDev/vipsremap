// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://vipremap-2640a0fa50a5.herokuapp.com/servicos';

  constructor(private http: HttpClient) {}

  getUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }

  updateUser(userId: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put(url, data);
  }
}
