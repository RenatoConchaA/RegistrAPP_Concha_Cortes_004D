import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/interfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
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
    isactive: true,
    password:'',
    rol:''
  }
  registerForm: FormGroup;


  constructor(private alertController:AlertController, 
              private menuController:MenuController,
              private apicrud: ApicrudService,
              private router: Router,
              private builder: FormBuilder) {
                this.registerForm = this.builder.group({
                  'nombre': new FormControl("", [Validators.required,Validators.minLength(4)]),
                  'apellido': new FormControl("", [Validators.required,Validators.minLength(4)]),
                  'sede': new FormControl("", [Validators.required,Validators.minLength(4)]),
                  'asignatura1': new FormControl("", [Validators.required,Validators.minLength(4)]),
                  'asignatura2': new FormControl("", [Validators.required,Validators.minLength(4)]),
                  'email': new FormControl("", [Validators.required,Validators.minLength(4)]),
                  'password': new FormControl("", [Validators.required,Validators.minLength(4)]),
                  'jornada': new FormControl("",[Validators.required]),
                  'ano': new FormControl("",[Validators.required]),
                  'semestre': new FormControl("",[Validators.required]),
                  'horas_sem_asig1': new FormControl("",[Validators.required]),
                  'horas_sem_asig2': new FormControl("",[Validators.required]),
                  'rol': new FormControl("",[Validators.required]),
                });
               }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  crearRegistro(){
    this.newUsuario.nombre=this.registerForm.value.nombre;
    this.newUsuario.apellido=this.registerForm.value.apellido;
    this.newUsuario.email=this.registerForm.value.email;
    this.newUsuario.sede=this.registerForm.value.sede;
    this.newUsuario.jornada=this.registerForm.value.jornada;
    this.newUsuario.asignatura1=this.registerForm.value.asignatura1;
    this.newUsuario.asignatura2=this.registerForm.value.asignatura2;
    this.newUsuario.ano=this.registerForm.value.ano;
    this.newUsuario.semestre=this.registerForm.value.semestre;
    this.newUsuario.horas_sem_asig1=this.registerForm.value.horas_sem_asig1;
    this.newUsuario.horas_sem_asig2=this.registerForm.value.horas_sem_asig2;
    this.newUsuario.rol=this.registerForm.value.rol;
    this.newUsuario.password=this.registerForm.value.password;
    this.newUsuario.isactive=true;
    this.apicrud.crearUsuario(this.newUsuario).subscribe();
    this.router.navigateByUrl("/login")
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

