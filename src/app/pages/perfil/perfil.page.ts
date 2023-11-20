import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  rol_usuario: string = '';
  password_usuario: string = '';
  email_usuario: string = '';
  nombre_usuario: string = '';
  apellido_usuario: string = '';
  id_usuario: string ='';
  asig1_usuario: string='';
  asig2_usuario: string='';
  ano_semestre: string='';
  semestre_usuario: string='';
  horas1_usuario: string='';
  horas2_usuario: string='';


  constructor(private authService: AuthService,
              private router: Router,
              private menuController:MenuController) {
                this.authService.setUserType('docente')
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
      const apellido = sessionStorage.getItem('apellido')
      const id = sessionStorage.getItem('id');
      const asig1 = sessionStorage.getItem('asignatura1');
      const asig2 = sessionStorage.getItem('asignatura2');
      const ano = sessionStorage.getItem('ano');
      const semestre = sessionStorage.getItem('semestre');
      const horas1 =sessionStorage.getItem('horas_sem_asig1');
      const horas2 =sessionStorage.getItem('horas_sem_asig2');

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
        if (apellido !== null) {
          console.log(apellido);
          this.apellido_usuario = apellido;
          console.log(this.apellido_usuario);
        } else {
          console.error('No se encontró el apellido en sessionStorage.');
          
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
        if (asig1 !== null) {
          console.log(id);
          this.asig1_usuario = asig1;
          console.log(this.asig1_usuario);
        } else {
          console.error('No se encontró la primera asignatura del usuario en sessionStorage.');
        }
        if (asig2 !== null) {
          console.log(id);
          this.asig2_usuario = asig2;
          console.log(this.asig2_usuario);
        } else {
          console.error('No se encontró la segunda asignatura del usuario en sessionStorage.');
        }
        if (ano !== null) {
          console.log(ano);
          this.ano_semestre = ano;
          console.log(this.ano_semestre);
        } else {
          console.error('No se encontró el año del usuario en sessionStorage.');
        }
        if (semestre !== null) {
          console.log(id);
          this.semestre_usuario = semestre;
          console.log(this.semestre_usuario);
        } else {
          console.error('No se encontró el semestre del usuario en sessionStorage.');
        }
        if (horas1 !== null) {
          console.log(id);
          this.horas1_usuario = horas1;
          console.log(this.horas1_usuario);
        } else {
          console.error('No se encontró la primera hora del usuario en sessionStorage.');
        }
        if (horas2 !== null) {
          console.log(id);
          this.horas2_usuario = horas2;
          console.log(this.horas2_usuario);
        } else {
          console.error('No se encontró la segunda hora del usuario en sessionStorage.');
        }

      } else {
        // Manejo en caso de que username sea null
        console.error('No se encontró el nombre de usuario en sessionStorage.');
      }
    } else {
      // El usuario no está autenticado, puedes redirigirlo a la página de inicio de sesión u otras acciones
    }
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
