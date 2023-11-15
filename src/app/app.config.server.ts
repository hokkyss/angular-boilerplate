import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import appConfig from './app.config';

const serverAppConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

const serverConfig = mergeApplicationConfig(appConfig, serverAppConfig);

export default serverConfig;
