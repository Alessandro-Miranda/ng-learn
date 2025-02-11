import { Component } from '@angular/core';
import { RatingFormComponent } from "../rating-form/rating-form.component";

@Component({
  selector: 'app-card',
  imports: [RatingFormComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
