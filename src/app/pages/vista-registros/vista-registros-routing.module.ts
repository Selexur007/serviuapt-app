import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaRegistrosPage } from './vista-registros.page';

const routes: Routes = [
  {
    path: '',
    component: VistaRegistrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaRegistrosPageRoutingModule {}
