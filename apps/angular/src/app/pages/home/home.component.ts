import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';

import { HomeViewModel } from './home.view-model';

@Component({
  imports: [CommonModule, HomeViewModel],
  selector: 'angular-home',
  standalone: true,
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public constructor(
    @Inject(HomeViewModel) public readonly vm: HomeViewModel,
  ) {}
}
