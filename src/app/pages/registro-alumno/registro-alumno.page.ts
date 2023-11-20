import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Alumno } from '../interfaces/interfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ApicrudService } from 'src/app/servicios/apicrud.service';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {
  newAlumno : Alumno={
    nombre:'',
    apellido:'',
    email:'',
    sede:'',
    jornada:'',
    isactive: true,
    password:'',
    rol:''
  }
  registerAlumnoForm: FormGroup;


  constructor(private alertController:AlertController, 
              private menuController:MenuController,
              private apicrud: ApicrudService,
              private router: Router,
              private builder: FormBuilder) {
                this.registerAlumnoForm = this.builder.group({
                  'nombre': new FormControl("", [Validators.required,Validators.minLength(4)]),
                  'apellido': new FormControl("", [Validators.required,Validators.minLength(4)]),
                  'sede': new FormControl("", [Validators.required,Validators.minLength(4)]),
                  'email': new FormControl("", [Validators.required,Validators.minLength(4)]),
                  'password': new FormControl("", [Validators.required,Validators.minLength(4)]),
                  'jornada': new FormControl("",[Validators.required]),
                  'rol': new FormControl("",[Validators.required]),
                });
               }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  crearRegistro(){
    this.newAlumno.nombre=this.registerAlumnoForm.value.nombre;
    this.newAlumno.apellido=this.registerAlumnoForm.value.apellido;
    this.newAlumno.email=this.registerAlumnoForm.value.email;
    this.newAlumno.sede=this.registerAlumnoForm.value.sede;
    this.newAlumno.jornada=this.registerAlumnoForm.value.jornada;
    this.newAlumno.rol=this.registerAlumnoForm.value.rol;
    this.newAlumno.isactive=true;
    this.newAlumno.password=this.registerAlumnoForm.value.password;
    this.apicrud.crearAlumno(this.newAlumno).subscribe();
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
    this.newAlumno.nombre='';
    this.newAlumno.apellido='';
    this.newAlumno.email='';
    this.newAlumno.sede='';
    this.newAlumno.password='';
  }

  
}
