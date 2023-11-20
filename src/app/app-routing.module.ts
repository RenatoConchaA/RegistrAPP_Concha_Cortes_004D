import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'actualizar-perfil/:id',
    loadChildren: () => import('./pages/actualizar-perfil/actualizar-perfil.module').then( m => m.ActualizarPerfilPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'registro-alumno',
    loadChildren: () => import('./pages/registro-alumno/registro-alumno.module').then( m => m.RegistroAlumnoPageModule)
  },
  {
    path: 'select-registro',
    loadChildren: () => import('./pages/select-registro/select-registro.module').then( m => m.SelectRegistroPageModule)
  },
  {
    path: 'scanearqr',
    loadChildren: () => import('./pages/scanearqr/scanearqr.module').then( m => m.ScanearqrPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'informacionalumno',
    loadChildren: () => import('./pages/informacionalumno/informacionalumno.module').then( m => m.InformacionalumnoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'perfilalumno',
    loadChildren: () => import('./pages/perfilalumno/perfilalumno.module').then( m => m.PerfilalumnoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'actualizaralumno/:id',
    loadChildren: () => import('./pages/actualizaralumno/actualizaralumno.module').then( m => m.ActualizaralumnoPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
