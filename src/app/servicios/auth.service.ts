import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario, Iusuarios, Alumno, Alumnos } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usertype:'alumno' | 'docente'|'';

  constructor(private httpClient: HttpClient) {
    this.usertype='';
   }

   setUserType(type: 'alumno' | 'docente') {
    this.usertype = type;
  }

  GetAllUsers():Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${environment.apiURL}/usuarios`);
  }

  GetUserById(codigo: any):Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${environment.apiURL}/usuarios/?email=${codigo}`);
  }
  GetAlumnoById(codigo: any):Observable<Alumno>{
    return this.httpClient.get<Alumno>(`${environment.apiURL}/Alumnos/?email=${codigo}`);
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
    sessionStorage.removeItem("ingresado");
    sessionStorage.removeItem("rol");
    sessionStorage.removeItem("isactive");
    sessionStorage.removeItem("password");
  }
  BuscarUsuarioId(id:number):Observable<Iusuarios>{
    return this.httpClient.get<Iusuarios>(`${environment.apiURL}/usuarios/?id=${id}`);
  }

  ActualizarUsuario(usuario:any):Observable<Iusuarios>{
    return this.httpClient.put<Iusuarios>(`${environment.apiURL}/usuarios/${usuario.id}`,usuario);
  }
  BuscarAlumnoId(id:number):Observable<Alumnos>{
    return this.httpClient.get<Alumnos>(`${environment.apiURL}/Alumnos/?id=${id}`);
  }

  ActualizarAlumno(Alumno:any):Observable<Alumnos>{
    return this.httpClient.put<Alumnos>(`${environment.apiURL}/Alumnos/${Alumno.id}`,Alumno);
  }
}
