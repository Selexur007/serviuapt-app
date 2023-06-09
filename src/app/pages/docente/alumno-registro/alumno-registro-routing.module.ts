import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoRegistroPage } from './alumno-registro.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoRegistroPageRoutingModule {}
