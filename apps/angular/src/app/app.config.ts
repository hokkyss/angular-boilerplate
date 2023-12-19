import type { ApplicationConfig } from '@angular/core';

import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { appRoutes } from './app.routes';
import envConfig from './configs/environments/environment.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStoreDevtools({ logOnly: envConfig.__DEV__ }),
    provideEffects(),
    provideStore(),
    provideClientHydration(),
    provideRouter(appRoutes),
  ],
};
