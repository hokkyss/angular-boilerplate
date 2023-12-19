import type { Route } from '@angular/router';

import { homeRoute } from './pages/home/home.route';
import { notFoundRoute } from './pages/not-found/not-found.route';

export const appRoutes: Route[] = [homeRoute, notFoundRoute];
