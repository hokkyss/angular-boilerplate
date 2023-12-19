import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'angular-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'angular';
}
