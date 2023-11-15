import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // NOTE: this is outside of application scope, so DI unavailable
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err));
