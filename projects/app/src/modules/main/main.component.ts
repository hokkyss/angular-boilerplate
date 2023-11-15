import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HighlightDirective } from 'directives';
import { PowerPipe } from 'pipes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [PowerPipe, HighlightDirective, MatButtonModule],
  standalone: true,
})
export default class MainComponent {
  public count = signal(0);

  public increaseCount() {
    this.count.update((prev) => prev + 1);
  }

  public decreaseCount() {
    this.count.update((prev) => prev - 1);
  }
}
