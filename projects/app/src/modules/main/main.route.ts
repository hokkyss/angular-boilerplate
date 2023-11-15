import type { Route } from '@angular/router';

const mainRoute: Route = {
  loadChildren: () => import('./main-routing.module').then((mod) => mod.default),
  path: '',
};

export default mainRoute;
