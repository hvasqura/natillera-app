import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaNatilleraPageRoutingModule } from './crea-natillera-routing.module';

import { CreaNatilleraPage } from './crea-natillera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaNatilleraPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreaNatilleraPage]
})
export class CreaNatilleraPageModule {}
