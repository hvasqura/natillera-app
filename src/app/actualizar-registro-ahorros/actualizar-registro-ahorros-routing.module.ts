import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarRegistroAhorrosPage } from './actualizar-registro-ahorros.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarRegistroAhorrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarRegistroAhorrosPageRoutingModule {}
