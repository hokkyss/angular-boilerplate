import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  selector: 'angular-boilerplate-directive-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {}
