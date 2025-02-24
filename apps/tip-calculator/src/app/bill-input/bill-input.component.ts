import { Component } from '@angular/core';
import { BaseInputComponent } from "../shared/base-input/base-input.component";

@Component({
  selector: 'app-bill-input',
  imports: [BaseInputComponent],
  templateUrl: './bill-input.component.html',
  styleUrl: './bill-input.component.css',
})
export class BillInputComponent {}
