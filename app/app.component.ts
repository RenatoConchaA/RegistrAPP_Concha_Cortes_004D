import { Component } from '@angular/core';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[
    {
      name:'Inicio',
      icon:'home',
      redirecTo:'/inicio'
    },
    {
      name:'Login',
      icon:'log-in',
      redirecTo:'/login'
    },
    {
      name:'Registro',
      icon:'create',
      redirecTo:'/registro'
    },
    {
      name:'Información',
      icon:'information',
      redirecTo:'/informacion'
    }
  ]
}
