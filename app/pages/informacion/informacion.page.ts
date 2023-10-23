import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  registros=[]


  constructor(private menuController:MenuController, 
              private router: Router,
              private authService: AuthService,
              private registroService: ApicrudService,
              private loadingCtrl: LoadingController) { }
  
  usuario = this.authService.GetName();
  

  ngOnInit() {
    return sessionStorage.getItem('email');
    
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  Api(){
    this.router.navigate(['/feriados'])
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }
}
