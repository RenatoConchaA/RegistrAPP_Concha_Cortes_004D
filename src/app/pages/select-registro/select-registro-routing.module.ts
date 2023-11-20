import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectRegistroPage } from './select-registro.page';

const routes: Routes = [
  {
    path: '',
    component: SelectRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRegistroPageRoutingModule {}
