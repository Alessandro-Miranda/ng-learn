import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type ProductData = {
  image: {
    src_desktop: string;
    src_mobile: string;
    alt: string;
  };
  category: string;
  title: string;
  summary: string;
  price: {
    actual: number;
    old?: number;
  }
}

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) productInfo!: ProductData;
}
