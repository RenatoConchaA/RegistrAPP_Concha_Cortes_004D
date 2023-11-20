import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfilalumno',
  templateUrl: './perfilalumno.page.html',
  styleUrls: ['./perfilalumno.page.scss'],
})
export class PerfilalumnoPage implements OnInit {

  rol_usuario: string = '';
  password_usuario: string = '';
  email_usuario: string = '';
  nombre_usuario: string = '';
  apellido_usuario: string = '';
  sede_usuario: string = '';
  jornada_usuario: string = '';
  id_usuario: string ='';


  constructor(private authService: AuthService,
    private router: Router,
    private menuController:MenuController) { 
      this.authService.setUserType('alumno')
    }

  ngOnInit() {
    this.loadUsuario();
  }

  async loadUsuario() {
    if (this.authService.IsLoggedIn()) {
      // El usuario está autenticado, puedes realizar acciones adicionales si es necesario
      const rol = sessionStorage.getItem('rol');
      const email = sessionStorage.getItem('email');
      const nombre = sessionStorage.getItem('nombre');
      const id = sessionStorage.getItem('id');
      const apellido = sessionStorage.getItem('apellido');
      const sede = sessionStorage.getItem('sede');
      const jornada = sessionStorage.getItem('jornada');


      if (nombre !== null) {
        console.log(nombre);
        this.nombre_usuario = nombre;
        console.log(this.nombre_usuario);

        if (rol !== null) {
          console.log(rol);
          this.rol_usuario = rol;
          console.log(this.rol_usuario);
        } else {
          console.error('No se encontró el rol en sessionStorage.');
        }
        if (nombre !== null) {
          console.log(nombre);
          this.nombre_usuario = nombre;
          console.log(this.nombre_usuario);
        } else {
          console.error('No se encontró el nombre en sessionStorage.');
          
        }
        if (email !== null) {
          console.log(email);
          this.email_usuario = email;
          console.log(this.email_usuario);
        } else {
          console.error('No se encontró el email en sessionStorage.');
        }
        if (id !== null) {
          console.log(id);
          this.id_usuario = id;
          console.log(this.id_usuario);
        } else {
          console.error('No se encontró el id en sessionStorage.');
        }
        if (apellido !== null) {
          console.log(apellido);
          this.apellido_usuario = apellido;
          console.log(this.apellido_usuario);
        } else {
          console.error('No se encontró el apellido en sessionStorage.');
        }
        if (sede !== null) {
          console.log(sede);
          this.sede_usuario = sede;
          console.log(this.sede_usuario);
        } else {
          console.error('No se encontró la sede en sessionStorage.');
        }
        if (jornada !== null) {
          console.log(jornada);
          this.jornada_usuario = jornada;
          console.log(this.jornada_usuario);
        } else {
          console.error('No se encontró la jornada en sessionStorage.');
        }

      } else {
        // Manejo en caso de que username sea null
        console.error('No se encontró el nombre de usuario en sessionStorage.');
      }
    } else {
      // El usuario no está autenticado, puedes redirigirlo a la página de inicio de sesión u otras acciones
    }
  }

}
