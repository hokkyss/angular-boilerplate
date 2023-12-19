import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'angular-home',
  standalone: true,
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
