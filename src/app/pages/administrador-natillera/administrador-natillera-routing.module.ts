import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorNatilleraPage } from './administrador-natillera.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradorNatilleraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorNatilleraPageRoutingModule {}
