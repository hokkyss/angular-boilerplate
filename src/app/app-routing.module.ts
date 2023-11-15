import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import routes from '../configs/router/router.config';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
