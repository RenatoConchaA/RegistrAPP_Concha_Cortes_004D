import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizaralumnoPageRoutingModule } from './actualizaralumno-routing.module';

import { ActualizaralumnoPage } from './actualizaralumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizaralumnoPageRoutingModule
  ],
  declarations: [ActualizaralumnoPage]
})
export class ActualizaralumnoPageModule {}
