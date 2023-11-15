import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import routes from '../configs/router/router.config';

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterLink, RouterOutlet, RouterLinkActive],
  exports: [RouterModule, RouterLink, RouterOutlet],
})
export default class AppRoutingModule {}
