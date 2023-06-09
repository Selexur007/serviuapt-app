import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltaAlumnoPageRoutingModule } from './alta-alumno-routing.module';

import { AltaAlumnoPage } from './alta-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaAlumnoPageRoutingModule, 
  ],
  declarations: [AltaAlumnoPage]
})
export class AltaAlumnoPageModule {}
