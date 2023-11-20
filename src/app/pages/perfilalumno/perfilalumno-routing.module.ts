import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilalumnoPage } from './perfilalumno.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilalumnoPageRoutingModule {}
