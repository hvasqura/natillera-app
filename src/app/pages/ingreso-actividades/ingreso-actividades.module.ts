import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoActividadesPageRoutingModule } from './ingreso-actividades-routing.module';

import { IngresoActividadesPage } from './ingreso-actividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoActividadesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IngresoActividadesPage]
})
export class IngresoActividadesPageModule {}
