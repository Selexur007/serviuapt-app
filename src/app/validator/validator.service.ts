import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  private apiUrl = 'http://localhost:3001/serviuapt/login'; // Cambia esto por la URL de tu backend

  constructor(private http: HttpClient) { }

  login(correo: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}`, { correo, password });
  }

  getRolFromToken(token: string): string {
    const decodedToken: any = jwt_decode(token);
    return decodedToken.rol;
  }
}