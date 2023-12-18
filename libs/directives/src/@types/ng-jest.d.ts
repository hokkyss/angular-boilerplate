import type { TestEnvironmentOptions } from '@angular/core/testing';

// NOTE: If we are not using `var`, it will only be accessible with `ngJest`, not `global.ngJest` nor `globalThis.ngJest`
/* eslint-disable no-var */
declare global {
  /**
   * @see {@link https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment}
   */
  // eslint-disable-next-line no-inner-declarations
  declare var ngJest: { testEnvironmentOptions: TestEnvironmentOptions };
}
