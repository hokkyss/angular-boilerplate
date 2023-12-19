import type { Route } from '@angular/router';

import { HomeComponent } from './home.component';

export const homeRoute: Route = {
  component: HomeComponent,
  path: '',
  title: 'Home',
};
