import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata:any;

  usuario={
    id:0,
    nombre:"",
    apellido:"",
    email:"",
    sede:"",
    jornada:"",
    asignatura1:"",
    asignatura2:"", 
    ano: "",
    semestre:"",
    horas_sem_asig1:"",
    horas_sem_asig2:"",
    rol:"",
    password:"",
    isactive: true
  }

  alumno={
    id:0,
    nombre:"",
    apellido:"",
    email:"",
    sede:"",
    jornada:"",
    rol:"",
    password:"",
    isactive: true
  }

  loginForm :FormGroup;
  

  constructor(private  alertController:AlertController,
              private menuController:MenuController,
              private authservice: AuthService,
              private router: Router,
              private builder: FormBuilder,
              private toastController: ToastController) {
                this.loginForm = this.builder.group({
                  'nombre': new FormControl("",[Validators.required, Validators.minLength(4)]),
                  'email': new FormControl("", [Validators.required, Validators.minLength(10)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(8)])
                })
              }

  ngOnInit() {
  }

  login(){
    console.log("Codificando Login");
    if (this.loginForm.valid){
       this.authservice.GetUserById(this.loginForm.value.email).subscribe(resp=>{ 
        this.userdata=resp;
        console.log(this.userdata);
        if (this.userdata.length>0){    
          this.usuario={                
              id : this.userdata[0].id,
              nombre: this.userdata[0].nombre,
              apellido: this.userdata[0].apellido,
              email: this.userdata[0].email,
              sede: this.userdata[0].sede,
              jornada: this.userdata[0].jornada,
              asignatura1: this.userdata[0].asignatura1,
              asignatura2: this.userdata[0].asignatura2,
              ano: this.userdata[0].ano,
              semestre: this.userdata[0].semestre,
              horas_sem_asig1: this.userdata[0].horas_sem_asig1,
              horas_sem_asig2: this.userdata[0].horas_sem_asig2,
              rol: this.userdata[0].rol,
              password: this.userdata[0].password,
              isactive: this.userdata[0].isactive
          }
          if (this.usuario.password===this.loginForm.value.password)
          {
            //if (this.usuario.password === this.loginForm.value.password){
              if (this.usuario.isactive){
                sessionStorage.setItem('id', this.usuario.id.toString()),
                sessionStorage.setItem('nombre', this.usuario.nombre),
                sessionStorage.setItem('apellido', this.usuario.apellido),
                sessionStorage.setItem('email', this.usuario.email);
                sessionStorage.setItem('sede', this.usuario.sede),
                sessionStorage.setItem('jornada', this.usuario.jornada),
                sessionStorage.setItem('asignatura1', this.usuario.asignatura1),
                sessionStorage.setItem('asignatura2', this.usuario.asignatura2),
                sessionStorage.setItem('ano', this.usuario.ano),
                sessionStorage.setItem('semestre', this.usuario.semestre),
                sessionStorage.setItem('horas_sem_asig1', this.usuario.horas_sem_asig1),
                sessionStorage.setItem('horas_sem_asig2', this.usuario.horas_sem_asig2),
                sessionStorage.setItem('password', this.usuario.password);
                sessionStorage.setItem('rol', this.usuario.rol);
                sessionStorage.setItem('isactive', this.usuario.isactive.toString()),
                sessionStorage.setItem('ingresado', 'true');
                this.showToast('Sesión Iniciada');
                this.router.navigateByUrl("/informacion");
            }
            else{
              this.UserInactivo();
            }
          }
          else{
            this.Error();
          }
        }
        else { 
          this.loginForm.reset();
          this.NoExiste();
        }

      })

    }

  }

  loginAlumno(){
    console.log("Codificando Login");
    if (this.loginForm.valid){
       this.authservice.GetAlumnoById(this.loginForm.value.email).subscribe(resp=>{ 
        this.userdata=resp;
        console.log(this.userdata);
        if (this.userdata.length>0){    
          this.alumno={                
              id : this.userdata[0].id,
              nombre: this.userdata[0].nombre,
              apellido: this.userdata[0].apellido,
              email: this.userdata[0].email,
              sede: this.userdata[0].sede,
              jornada: this.userdata[0].jornada,
              rol: this.userdata[0].rol,
              password: this.userdata[0].password,
              isactive: this.userdata[0].isactive
          }
          if (this.alumno.password===this.loginForm.value.password)
          {
            //if (this.usuario.password === this.loginForm.value.password){
              if (this.alumno.isactive){
                sessionStorage.setItem('id', this.alumno.id.toString());
                sessionStorage.setItem('nombre', this.alumno.nombre);
                sessionStorage.setItem('apellido', this.alumno.apellido);
                sessionStorage.setItem('email', this.alumno.email);
                sessionStorage.setItem('sede', this.alumno.sede);
                sessionStorage.setItem('jornada', this.alumno.jornada),
                sessionStorage.setItem('password', this.alumno.password);
                sessionStorage.setItem('rol', this.alumno.rol);
                sessionStorage.setItem('isactive', this.alumno.isactive.toString()),
                sessionStorage.setItem('ingresado', 'true');
                this.showToast('Sesión Iniciada');
                this.router.navigateByUrl("/informacionalumno");
            }
            else{
              this.UserInactivo();
            }
          }
          else{
            this.Error();
          }
        }
        else { 
          this.loginForm.reset();
          this.NoExiste();
        }

      })

    }

  }



  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Iniciando sesion...',
      buttons: ['OK'],
    });

    await alert.present();
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  Enviar(){
    console.log('Iniciando sesion')
    this.MostrarMensaje();
    this.usuario.email='';
    this.usuario.password='';
  }


  async showToast(msg: any){
    const toast= await this.toastController.create({
      message:msg,
      duration: 5000
    })
    toast.present();
  }


  async UserInactivo(){
    const alerta = await this.alertController.create({
      header : 'Usuario inactivo',
      message : 'Contactar a admin@admin.cl',
      buttons : ['OK']
    })
    alerta.present();
  }


  async Error(){
    const alerta = await this.alertController.create({
      header : 'Error...',
      message : 'Revise sus credenciales',
      buttons : ['OK']
    })
    alerta.present(); 
  }


  async NoExiste(){
    const alerta = await this.alertController.create({
      header : 'No existe...',
      message : 'Debe registrarse',
      buttons : ['OK']
    })
    alerta.present(); 
  }


}
