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
    nombre:'',
    email:'',
    password:'',
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
                  'nombre': new FormControl("",[Validators.required, Validators.minLength(6)]),
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
              email: this.userdata[0].email,
              password: this.userdata[0].password,
              isactive: this.userdata[0].isactive
          }
          if (this.usuario.password===this.loginForm.value.password)
          {
            if (this.usuario.password === this.loginForm.value.password){
              sessionStorage.setItem('nombre', this.usuario.nombre),
              sessionStorage.setItem('email', this.usuario.email);
              sessionStorage.setItem('password', this.userdata.password);
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
