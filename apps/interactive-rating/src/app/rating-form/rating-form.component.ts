import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating-form',
  imports: [NgFor, FormsModule],
  templateUrl: './rating-form.component.html',
  styleUrl: './rating-form.component.css',
})
export class RatingFormComponent {
  @Output() sendSelectedRate = new EventEmitter<string>();
  selectedRate: string | undefined;

  onSendRating() {
    if (!this.selectedRate) alert('Please, select a rating');
    
    this.sendSelectedRate.emit(this.selectedRate);
  }
}
