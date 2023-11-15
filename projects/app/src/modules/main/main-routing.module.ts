import { NgModule } from '@angular/core';
import { RouterModule, type Route } from '@angular/router';
import MainComponent from './main.component';

export const mainRoute: Route = {
  path: '',
  component: MainComponent,
};

@NgModule({
  imports: [RouterModule.forChild([mainRoute])],
  exports: [RouterModule],
})
export default class MainRoutingModule {}
