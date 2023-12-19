import type { Route } from '@angular/router';

export const notFoundRoute: Route = {
  loadComponent: () =>
    import('./not-found.component').then((m) => m.NotFoundComponent),
  path: '**',
  title: 'Not Found',
};
