import type { Route } from '@angular/router';
import NotFoundComponent from './not-found.component';

const notFoundRoute: Route = {
  path: '**',
  component: NotFoundComponent,
};

export default notFoundRoute;
