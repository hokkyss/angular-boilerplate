import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { loggingInterceptor } from 'interceptors';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage, BrowserAnimationsModule, AsyncPipe],
  providers: [provideHttpClient(withFetch(), withInterceptors([loggingInterceptor])), provideClientHydration()],
  bootstrap: [AppComponent],
})
export default class AppModule {}
