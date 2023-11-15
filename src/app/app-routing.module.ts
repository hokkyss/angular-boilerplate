import { NgModule } from '@angular/core';
import {
  RouterLink,
  RouterModule,
  RouterOutlet,
  Routes,
} from '@angular/router';
import routes from '../configs/router/router.config';

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterLink, RouterOutlet],
  exports: [RouterModule, RouterLink, RouterOutlet],
})
export default class AppRoutingModule {}
