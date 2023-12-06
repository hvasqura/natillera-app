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
  },
  {
    path: 'ingreso-socios',
    loadChildren: () => import('./pages/ingreso-socios/ingreso-socios.module').then( m => m.IngresoSociosPageModule)
  },
  {
    path: 'crea-natillera',
    loadChildren: () => import('./pages/crea-natillera/crea-natillera.module').then( m => m.CreaNatilleraPageModule)
  },
  {
    path: 'ingreso-ahorros',
    loadChildren: () => import('./pages/ingreso-ahorros/ingreso-ahorros.module').then( m => m.IngresoAhorrosPageModule)
  },  {
    path: 'administrador-natillera',
    loadChildren: () => import('./pages/administrador-natillera/administrador-natillera.module').then( m => m.AdministradorNatilleraPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
