import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocentePage } from './docente.page';

const routes: Routes = [
  {
    path: '',
    component: DocentePage,
    children:[
      {
        path: 'alta-alumno',
        loadChildren: () => import('./alta-alumno/alta-alumno.module').then( m => m.AltaAlumnoPageModule)
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
    {
      path: 'configuracion',
      loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
    },
    {
      path: 'consulta',
      loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
    },
    {
      path: 'actualizacion',
      loadChildren: () => import('./actualizacion/actualizacion.module').then( m => m.ActualizacionPageModule)
    },
    {
      path: 'alumno-registro',
      loadChildren: () => import('./alumno-registro/alumno-registro.module').then( m => m.AlumnoRegistroPageModule)
    },
    

    ]
  },
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocentePageRoutingModule {}
