import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
} from '@angular/core';

@Directive({
  selector: '[angularBoilerplateHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() public highlightColor = '';
  public readonly defaultHighlightColor = 'yellow';

  public constructor(@Inject(ElementRef) private el: ElementRef) {}

  @HostListener('mouseenter') public onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultHighlightColor);
  }

  @HostListener('mouseleave') public onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
