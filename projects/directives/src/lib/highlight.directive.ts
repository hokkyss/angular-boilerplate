/**
 * Taken from @see {@link https://angular.dev/guide/directives/attribute-directives} angular.dev
 */

import { Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';

/**
 * yes
 */
@Directive({
  standalone: true,
  selector: '[libHighlight]',
})
export default class HighlightDirective {
  @Input({ required: true }) public highlightColor = '';

  public constructor(@Inject(ElementRef) private el: ElementRef) {}

  @HostListener('mouseenter') public onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') public onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
