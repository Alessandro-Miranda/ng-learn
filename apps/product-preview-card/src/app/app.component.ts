import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from "./card/card.component";

@Component({
  imports: [RouterModule, CardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productInfo = {
    image: {
      src_desktop: 'images/image-product-desktop.jpg',
      src_mobile: 'images/image-product-mobile.jpg',
      alt: 'Gabrielle Essence Eau de Parfum',
    },
    category: '',
    title: 'Gabrielle Essence Eau de Parfum',
    summary: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL',
    price: {
      actual: 149.99,
      old: 169.99,
    },
  };
}
