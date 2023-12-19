import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'angular-not-found',
  standalone: true,
  styleUrl: './not-found.component.css',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
