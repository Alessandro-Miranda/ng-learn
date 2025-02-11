import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LinkData } from './models/socialLinks.models';
import { UserData } from './models/user.model';
import { SocialLinkComponent } from "./social-link/social-link.component";
import { UserComponent } from "./user/user.component";

@Component({
  imports: [UserComponent, SocialLinkComponent, NgFor],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user: UserData = {
    name: 'Jessica Randall',
    location: 'London, United Kingdom',
    profileImage: './assets/images/avatar-jessica.jpeg',
    summary: 'Front-end developer and avid reader.'
  }

  socialLinks: LinkData[] = [
    { label: 'GitHub', link: '' },
    { label: 'Frontend Mentor', link: '' },
    { label: 'LinkedIn', link: '' },
    { label: 'Twitter', link: '' },
    { label: 'Instagram', link: '' }
  ]
}
