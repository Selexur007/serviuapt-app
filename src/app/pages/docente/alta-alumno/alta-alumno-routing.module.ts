import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaAlumnoPage } from './alta-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: AltaAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaAlumnoPageRoutingModule {}
