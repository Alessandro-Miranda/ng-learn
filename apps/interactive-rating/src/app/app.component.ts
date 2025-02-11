import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  imports: [CardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
