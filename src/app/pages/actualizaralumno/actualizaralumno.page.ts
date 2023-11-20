import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-actualizaralumno',
  templateUrl: './actualizaralumno.page.html',
  styleUrls: ['./actualizaralumno.page.scss'],
})
export class ActualizaralumnoPage implements OnInit {
  Alumno={
    id:0,
    nombre:'',
    apellido:'',
    email:'',
    sede:'',
    jornada:'',
    rol:'',
    password:'',
    isactive: false
  }

  constructor(private authService: AuthService, 
              private router: Router,
              private menuController: MenuController) { 
      this.authService.setUserType('alumno')
    }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getAlmunoById(this.getIdFromUrl());
   
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    console.log(id);
    return id;
  }

  getAlmunoById(alumnoID:number){
    this.authService.BuscarAlumnoId(alumnoID).subscribe(
      (resp:any)=>{                  
        this.Alumno={
          id: resp[0].id,                
          nombre: resp[0].nombre,
          apellido: resp[0].apellido,
          email: resp[0].email,
          sede: resp[0].sede,
          jornada: resp[0].jornada,
          password: resp[0].password,
          rol: resp[0].rol,
          isactive: resp[0].isactive
        }
      }
    )
    console.log(this.Alumno);
  }

  updateAlumno(){
      this.authService.ActualizarAlumno(this.Alumno).subscribe();
      this.router.navigateByUrl("/informacionalumno");
  }

  
  mostrarMenu(){
    this.menuController.open('first');
  }

}
