import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'informacion-socio',
    loadChildren: () => import('./informacion-socio/informacion-socio.module').then( m => m.InformacionSocioPageModule)
  },
  {
    path: 'ahorro',
    loadChildren: () => import('./ahorro/ahorro.module').then( m => m.AhorroPageModule)
  },
  {
    path: 'actualizar-registro-ahorros',
    loadChildren: () => import('./actualizar-registro-ahorros/actualizar-registro-ahorros.module').then( m => m.ActualizarRegistroAhorrosPageModule)
  },
 
  {
    path: 'actividades',
    loadChildren: () => import('./pages/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'ingreso-actividades',
    loadChildren: () => import('./pages/ingreso-actividades/ingreso-actividades.module').then( m => m.IngresoActividadesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
