import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  opcionesalumno=[
    {
      name:'Login',
      icon:'log-in',
      redirecTo:'/login'
    },
    {
      name:'Registro',
      icon:'create',
      redirecTo:'/select-registro'
    },
    {
      name:'Información',
      icon:'information',
      redirecTo:'/informacionalumno'
    },
    {
      name:'Scannear QR',
      icon:'scan',
      redirecTo:'/scanearqr'
    },
    {
      name:'Perfil',
      icon:'person',
      redirecTo:'/perfilalumno'
    }
  ];
    opcionesdocente=[
    {
      name:'Login',
      icon:'log-in',
      redirecTo:'/login'
    },
    {
      name:'Registro',
      icon:'create',
      redirecTo:'/select-registro'
    },
    {
      name:'Información',
      icon:'information',
      redirecTo:'/informacion'
    },
    {
      name:'Generar QR',
      icon:'qr-code-outline',
      redirecTo:'/qr'
    },
    {
      name:'Perfil',
      icon:'person',
      redirecTo:'/perfil'
    }
  ];
  

  get menuItems(){
    return this.authService.usertype==='alumno'? this.opcionesalumno :this.opcionesdocente
  }
}
