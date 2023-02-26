import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaNatilleraPage } from './crea-natillera.page';

const routes: Routes = [
  {
    path: '',
    component: CreaNatilleraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaNatilleraPageRoutingModule {}
