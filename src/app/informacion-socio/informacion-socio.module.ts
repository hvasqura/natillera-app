import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionSocioPageRoutingModule } from './informacion-socio-routing.module';

import { InformacionSocioPage } from './informacion-socio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionSocioPageRoutingModule
  ],
  declarations: [InformacionSocioPage]
})
export class InformacionSocioPageModule {}
