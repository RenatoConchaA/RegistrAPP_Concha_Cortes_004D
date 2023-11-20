import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizaralumnoPage } from './actualizaralumno.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizaralumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizaralumnoPageRoutingModule {}
