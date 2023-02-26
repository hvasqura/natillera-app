import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoSociosPageRoutingModule } from './ingreso-socios-routing.module';

import { IngresoSociosPage } from './ingreso-socios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoSociosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IngresoSociosPage]
})
export class IngresoSociosPageModule {}
