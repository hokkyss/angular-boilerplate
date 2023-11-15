import type { Routes } from '@angular/router';
import MainComponent from '../../pages/main/main.component';
import NotFoundComponent from '../../pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

export default routes;
