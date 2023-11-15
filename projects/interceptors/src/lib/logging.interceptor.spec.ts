import type { HttpInterceptorFn } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { loggingInterceptor } from './logging.interceptor';

describe('loggingInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => loggingInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
