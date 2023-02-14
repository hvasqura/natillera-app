import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionSocioPage } from './informacion-socio.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionSocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionSocioPageRoutingModule {}
