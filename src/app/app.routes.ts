import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./config-citas/config-citas.page').then( m => m.ConfigCitasPage)
  },
  {
    path: 'gestion-citas',
    loadComponent: () => import('./gestion-citas/gestion-citas.page').then( m => m.GestionCitasPage)
  },
];
