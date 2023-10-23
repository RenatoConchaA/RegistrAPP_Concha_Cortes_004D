import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/interfaces';
import { ApicrudService } from 'src/app/servicios/apicrud.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  newUsuario : Usuario={
    nombre:'',
    apellido:'',
    email:'',
    sede:'',
    jornada:'',
    asignatura1:'',
    asignatura2:'',
    ano:0,
    semestre:'',
    horas_sem_asig1:0,
    horas_sem_asig2:0,
    password:'',
  }


  constructor(private alertController:AlertController, 
              private menuController:MenuController,
              private apicrud: ApicrudService,
              private router: Router) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  crearRegistro(){
    this.apicrud.crearUsuario(this.newUsuario).subscribe();
    this.router.navigateByUrl("/informacion")
  }

   async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Registrado',
      message: 'Se ha registrado correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

  Enviar(){
    console.log('Usuario registrado')
    this.MostrarMensaje();
    this.newUsuario.nombre='';
    this.newUsuario.apellido='';
    this.newUsuario.email='';
    this.newUsuario.sede='';
    this.newUsuario.password='';
  }

  
}

