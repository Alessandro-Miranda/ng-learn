import { Component, Input } from '@angular/core';
import { LinkData } from '../models/socialLinks.models';

@Component({
  selector: 'app-social-link',
  imports: [],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.css',
})
export class SocialLinkComponent {
  @Input({ required: true }) linkData!: LinkData;
}
