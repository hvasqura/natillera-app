import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoAhorrosPageRoutingModule } from './ingreso-ahorros-routing.module';

import { IngresoAhorrosPage } from './ingreso-ahorros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoAhorrosPageRoutingModule
  ],
  declarations: [IngresoAhorrosPage]
})
export class IngresoAhorrosPageModule {}
