import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { NgOptimizedImage } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage, BrowserAnimationsModule],
  providers: [provideHttpClient(withFetch()), provideClientHydration()],
  bootstrap: [AppComponent],
})
export default class AppModule {}
