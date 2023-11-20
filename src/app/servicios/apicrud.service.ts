import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario, Alumnos, Alumno } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { InfoQR, Infoqrs, InfoAlumnoQRs, InfoAlumnoQR } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpClient: HttpClient) { }

  crearUsuario(newUsuario:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>(`${environment.apiURL}/usuarios`,newUsuario);
  }
  crearAlumno(newAlumno:Alumno):Observable<Alumno>{
    return this.httpClient.post<Alumno>(`${environment.apiURL}/Alumnos`,newAlumno);
  }

  mostrarRegistrados():Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${environment.apiURL}/usuarios`)
  }
  CrearPalabra(newQR:Infoqrs): Observable<Infoqrs>{
    return this.httpClient.post<InfoQR>(`${environment.apiURL}/infoQr`, newQR);
  }
  RegistrarAsistencia(EscanearQR:InfoAlumnoQRs): Observable<InfoAlumnoQRs>{
    return this.httpClient.post<InfoAlumnoQR>(`${environment.apiURL}/InfoAlumnoQR`, EscanearQR);
  }
}
