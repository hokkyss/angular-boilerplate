import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoggingServiceToken } from 'common';

const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const loggerService = inject(LoggingServiceToken);

  loggerService.log(`Request made to ${req.url}`);
  return next(req);
};

export default loggingInterceptor;
