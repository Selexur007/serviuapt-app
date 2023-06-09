import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoRegistroPageRoutingModule } from './alumno-registro-routing.module';

import { AlumnoRegistroPage } from './alumno-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoRegistroPageRoutingModule
  ],
  declarations: [AlumnoRegistroPage]
})
export class AlumnoRegistroPageModule {}
