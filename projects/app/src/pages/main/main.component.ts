import { Component } from '@angular/core';
import HighlightDirective from '../../../../directives/src/lib/highlight.directive';
import PowerPipe from '../../../../pipes/src/lib/power.pipe';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [PowerPipe, HighlightDirective],
  standalone: true,
})
export default class MainComponent {}
