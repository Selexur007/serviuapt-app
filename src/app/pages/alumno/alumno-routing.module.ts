import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoPage } from './alumno.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoPage,
    children:[
      {
        path: 'configuracion',
        loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
      },
      {
        path: 'horas',
        loadChildren: () => import('./horas/horas.module').then( m => m.HorasPageModule)
      },
      {
        path: 'actividades',
        loadChildren: () => import('./actividades/actividades.module').then( m => m.ActividadesPageModule)
      },
      {
        path: 'reportes',
        loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule)
      },
    ]
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoPageRoutingModule {}
