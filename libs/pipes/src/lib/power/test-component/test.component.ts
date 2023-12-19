import { Component } from '@angular/core';

import { PowerPipe } from '../power.pipe';

@Component({
  imports: [PowerPipe],
  selector: 'angular-boilerplate-power-pipe-test',
  standalone: true,
  styleUrl: './test.component.css',
  templateUrl: './test.component.html',
})
export class TestComponent {}
