import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradorNatilleraPageRoutingModule } from './administrador-natillera-routing.module';

import { AdministradorNatilleraPage } from './administrador-natillera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministradorNatilleraPageRoutingModule
  ],
  declarations: [AdministradorNatilleraPage]
})
export class AdministradorNatilleraPageModule {}
