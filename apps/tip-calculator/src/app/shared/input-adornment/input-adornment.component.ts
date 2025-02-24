import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-adornment',
  imports: [],
  templateUrl: './input-adornment.component.html',
  styleUrl: './input-adornment.component.css',
})
export class InputAdornmentComponent {
  @Input({ required: true }) icon!: {
    src: string;
    alt: string;
  };
  @Input() inputType: 'text' | 'number' | 'radio' = 'text';
  @Input() inputId?: string = '';
}
