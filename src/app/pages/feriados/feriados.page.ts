import { Component, OnInit } from '@angular/core';
import { FeriadosService } from 'src/app/servicios/feriados.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage{

  feriados= []

  constructor(private feriadosService : FeriadosService,
              private loadingCtrl: LoadingController) { }
  
  ionViewWillEnter(){
    this.loadFeriados();
  }
  

  async loadFeriados(event?:InfiniteScrollCustomEvent){

    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    });
    await loading.present();

    this.feriadosService.ListarFeriados().subscribe(
      {
        next: resp=>{
          console.log(resp);
          loading.dismiss();
          let listString = JSON.stringify(resp)
          this.feriados= JSON.parse(listString)
          event?.target.complete();
          console.log(this.feriados);
        },
        error:err=>{
          console.log(err.error.message);
          loading.dismiss();
        }
      }
    )
  }
}
