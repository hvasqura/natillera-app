import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarRegistroAhorrosPageRoutingModule } from './actualizar-registro-ahorros-routing.module';

import { ActualizarRegistroAhorrosPage } from './actualizar-registro-ahorros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarRegistroAhorrosPageRoutingModule
  ],
  declarations: [ActualizarRegistroAhorrosPage]
})
export class ActualizarRegistroAhorrosPageModule {}
