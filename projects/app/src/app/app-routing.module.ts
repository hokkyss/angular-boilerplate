import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import mainRoute from '../modules/main/main.route';
import notFoundRoute from '../modules/not-found/not-found.route';

const routes: Routes = [mainRoute, notFoundRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterLink, RouterOutlet, RouterLinkActive],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
