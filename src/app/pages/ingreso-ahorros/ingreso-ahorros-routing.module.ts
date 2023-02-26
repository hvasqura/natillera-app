import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoAhorrosPage } from './ingreso-ahorros.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoAhorrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoAhorrosPageRoutingModule {}
