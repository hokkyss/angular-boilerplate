import { Component } from '@angular/core';

import { HighlightDirective } from '../highlight.directive';

@Component({
  imports: [HighlightDirective],
  selector: 'angular-boilerplate-highlight-directive-test',
  standalone: true,
  styleUrl: './test.component.css',
  templateUrl: './test.component.html',
})
export class TestComponent {}
