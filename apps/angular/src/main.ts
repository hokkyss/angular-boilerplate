import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/main/app.component';
import { appConfig } from './app/main/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  // eslint-disable-next-line no-console
  console.error(err),
);
