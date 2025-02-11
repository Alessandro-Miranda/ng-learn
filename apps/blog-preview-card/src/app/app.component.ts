import { Component } from '@angular/core';
import { AuthorData } from './author/author.model';
import { CardComponent } from "./card/card.component";

@Component({
  imports: [CardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  postCategory = ['Learning'];
  publishedAt = '2023-12-21';
  postTitle = 'HTML & CSS foundations';
  postSummary =
    'These languages are the backbone of every website, defining structure, content, and presentation.';
  author: AuthorData = {
    name: 'Greg Hooper',
    profileImage: './userpic.png'
  };
  postImage = './post-image.png'
}
