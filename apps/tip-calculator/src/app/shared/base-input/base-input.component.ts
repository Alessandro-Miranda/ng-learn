import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-input',
  imports: [],
  templateUrl: './base-input.component.html',
  styleUrl: './base-input.component.css',
})
export class BaseInputComponent {
  @Input() type: 'text' | 'number' | 'radio' = 'text';
  @Input() placeholder?: string = '';
}
