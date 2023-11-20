import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectRegistroPageRoutingModule } from './select-registro-routing.module';

import { SelectRegistroPage } from './select-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectRegistroPageRoutingModule
  ],
  declarations: [SelectRegistroPage]
})
export class SelectRegistroPageModule {}
