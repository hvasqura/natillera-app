import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoActividadesPage } from './ingreso-actividades.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoActividadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoActividadesPageRoutingModule {}
