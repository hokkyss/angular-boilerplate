// NOTE: abstraction for loggers
/* eslint-disable no-console */
import { Injectable } from '@angular/core';
import LoggingServiceToken from './logging.service.token';

@Injectable({
  providedIn: 'root',
})
export default class LoggingService implements LoggingServiceToken {
  public log(...data: unknown[]) {
    console.log(...data);
  }
  public warn(...data: unknown[]) {
    console.warn(...data);
  }
  public error(...data: unknown[]) {
    console.error(...data);
  }
}

export { LoggingServiceToken };
