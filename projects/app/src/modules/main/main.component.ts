import { Component, Inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { HighlightDirective } from 'directives';
import { PowerPipe } from 'pipes';
import environment from '../../environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [PowerPipe, HighlightDirective, MatButtonModule],
  standalone: true,
})
export default class MainComponent {
  public count = signal(0);
  public env = environment.__DEV__ ? 'development' : 'production';

  public constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(Router) private router: Router,
  ) {}

  public increaseCount() {
    this.count.update((prev) => prev + 1);
  }

  public decreaseCount() {
    this.count.update((prev) => prev - 1);
  }
}
