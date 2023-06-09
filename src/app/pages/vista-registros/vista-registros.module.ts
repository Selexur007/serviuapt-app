import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaRegistrosPageRoutingModule } from './vista-registros-routing.module';

import { VistaRegistrosPage } from './vista-registros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaRegistrosPageRoutingModule
  ],
  declarations: [VistaRegistrosPage]
})
export class VistaRegistrosPageModule {}
