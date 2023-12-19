import type { Route } from '@angular/router';

export const homeRoute: Route = {
  loadComponent: () => import('./home.component').then((m) => m.HomeComponent),
  path: '',
  title: 'Home',
};
