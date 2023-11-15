/**
 * Taken from @see {@link https://angular.dev/guide/directives/attribute-directives} angular.dev
 */

import { Directive } from '@angular/core';

/**
 * yes
 */
@Directive({
  standalone: true,
  selector: '[libHighlight]',
})
export default class HighlightDirective {}
