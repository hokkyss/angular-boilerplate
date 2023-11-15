import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import AppComponent from './app.component';
import AppRoutingModule from './app-routing.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
  ],
  providers: [provideHttpClient(withFetch()), provideClientHydration()],
  bootstrap: [AppComponent],
})
export default class AppModule {}
