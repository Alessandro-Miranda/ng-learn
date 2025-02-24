import { Component } from '@angular/core';
import { InputAdornmentComponent } from "../shared/input-adornment/input-adornment.component";

@Component({
  selector: 'app-bill-input',
  imports: [InputAdornmentComponent],
  templateUrl: './bill-input.component.html',
  styleUrl: './bill-input.component.css',
})
export class BillInputComponent {}
