import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpClient: HttpClient) { }

  crearUsuario(newUsuario:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>(`${environment.apiURL}/usuarios`,newUsuario);
  }

  mostrarRegistrados():Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${environment.apiURL}/usuarios`)
  }
}
