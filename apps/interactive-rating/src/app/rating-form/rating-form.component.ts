import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-form',
  imports: [NgFor],
  templateUrl: './rating-form.component.html',
  styleUrl: './rating-form.component.css',
})
export class RatingFormComponent {}
