import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilalumnoPageRoutingModule } from './perfilalumno-routing.module';

import { PerfilalumnoPage } from './perfilalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilalumnoPageRoutingModule
  ],
  declarations: [PerfilalumnoPage]
})
export class PerfilalumnoPageModule {}
