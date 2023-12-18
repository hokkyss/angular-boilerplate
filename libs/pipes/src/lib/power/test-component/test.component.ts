import { Component } from '@angular/core';
import { PowerPipe } from '../power.pipe';

@Component({
  standalone: true,
  imports: [PowerPipe],
  selector: 'angular-boilerplate-power-pipe-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {}
