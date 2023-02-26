import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoSociosPage } from './ingreso-socios.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoSociosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoSociosPageRoutingModule {}
