import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.page.html',
  styleUrls: ['./actualizar-perfil.page.scss'],
})
export class ActualizarPerfilPage implements OnInit {

  usuario={
    id:0,
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
    rol:'',
    password:'',
    isactive: false
  }

  constructor(private authService: AuthService, 
              private router: Router,
              private menuController: MenuController) {
                this.authService.setUserType('docente')
               }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
   
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    console.log(id);
    return id;
  }

  getUsuarioById(usuarioID:number){
    this.authService.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{                  
        this.usuario={
          id: resp[0].id,                
          nombre: resp[0].nombre,
          apellido: resp[0].apellido,
          email: resp[0].email,
          sede: resp[0].sede,
          jornada: resp[0].jornada,
          asignatura1: resp[0].asignatura1,
          asignatura2: resp[0].asignatura2,
          ano: resp[0].ano,
          semestre: resp[0].semestre,
          horas_sem_asig1: resp[0].horas_sem_asig1,
          horas_sem_asig2: resp[0].horas_sem_asig2,
          password: resp[0].password,
          rol: resp[0].rol,
          isactive: resp[0].isactive
        }
      }
    )
    console.log(this.usuario);
  }

  updateUsuario(){
      this.authService.ActualizarUsuario(this.usuario).subscribe();
      this.router.navigateByUrl("/informacion");
  }


  mostrarMenu(){
    this.menuController.open('first');
  }


}
