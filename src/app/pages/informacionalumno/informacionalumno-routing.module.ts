import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionalumnoPage } from './informacionalumno.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionalumnoPageRoutingModule {}
