import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import NotFoundComponent from '../modules/not-found/not-found.component';

const routes: Routes = [
  { loadChildren: () => import('../modules/main/main-routing.module').then((mod) => mod.default), path: '' },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterLink, RouterOutlet, RouterLinkActive],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
