import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

/**
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * @example
 * ```html
 * {{ 2 | power:10 }} <!-- formats to 1024 -->
 * {{ 2 | power }} <!-- formats to 2 -->
 * ```
 */
@Pipe({
  name: 'power',
  standalone: true,
})
export default class PowerPipe implements PipeTransform {
  public transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}
