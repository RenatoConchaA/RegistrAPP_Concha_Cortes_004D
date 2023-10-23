import { Component, OnInit } from '@angular/core';
import { FeriadosService } from 'src/app/servicios/feriados.service';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  feriados: any [] = [];

  constructor(private feriadosService : FeriadosService) { }

  ngOnInit() {
    this.feriados = this.feriadosService.obtenerFeriados();
  }

}
