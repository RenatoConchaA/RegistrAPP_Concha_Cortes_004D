import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feriados } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Feriado } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(private httpClient: HttpClient) { }
  
  ListarFeriados():Observable<Feriados> {
    return this.httpClient.get<Feriados>(`${environment.apiURL}/feriados`);
  }
}
