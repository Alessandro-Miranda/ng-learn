import { Component, Input } from '@angular/core';
import { AuthorData } from './author.model';

@Component({
  selector: 'app-author',
  imports: [],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {
  @Input({ required: true }) author!: AuthorData;
}
