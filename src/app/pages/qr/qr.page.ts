import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Infoqrs } from '../interfaces/interfaces';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  public mensaje:string;
  
  fecha_actual= new Date();

  data={
    texto:''
  }
  nombre: any;

  newQR:Infoqrs={
    Nombre:'',
    Asignatura:'',
    Fecha:''
  }
  
  
  constructor(private alertcontroller: AlertController, 
              private apicrudservice: ApicrudService,
              private authService: AuthService,
              private menuController:MenuController) {
    this.authService.setUserType('docente')
    this.mensaje='Duoc UC Maipú';
    this.nombre= sessionStorage.getItem('nombre');
   }
   usuario = this.authService.GetName();

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  generarQr(){
    this.mensaje = this.data.texto;
    this.newQR.Nombre=this.nombre;
    this.newQR.Asignatura=this.mensaje
    this.newQR.Fecha= this.fecha_actual.toLocaleDateString()
    this.apicrudservice.CrearPalabra(this.newQR).subscribe();
    this.mostrarMensaje();
    this.data.texto='';
  }
  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header:'Creando Palabra',
      message: 'Su QR ha sido Almacenado',
      buttons: ['Ok']
    })
    alerta.present();
  }



}
