import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AuthorComponent } from "../author/author.component";
import { AuthorData } from '../author/author.model';
import { CategoryBadgeComponent } from "./category-badge/category-badge.component";

@Component({
  selector: 'app-card',
  imports: [CommonModule, AuthorComponent, CategoryBadgeComponent, DatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) postImage!: string;
  @Input() postCategories?: string[];
  @Input({ required: true }) publishedAt!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) summary!: string;
  @Input({ required: true }) authorData!: AuthorData;
}
