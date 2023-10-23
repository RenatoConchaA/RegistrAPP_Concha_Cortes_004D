import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  GetAllUsers():Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${environment.apiURL}/usuarios`);
  }

  GetUserById(codigo: any):Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${environment.apiURL}/usuarios/?email=${codigo}`);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('email')!=null
  }
  GetName(){
    return sessionStorage.getItem("nombre");
  }
  logout() {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userrole");
    sessionStorage.removeItem("ingresado");
  }
}
