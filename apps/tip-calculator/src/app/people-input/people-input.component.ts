import { Component } from '@angular/core';
import { InputAdornmentComponent } from "../shared/input-adornment/input-adornment.component";

@Component({
  selector: 'app-people-input',
  imports: [InputAdornmentComponent],
  templateUrl: './people-input.component.html',
  styleUrl: './people-input.component.css',
})
export class PeopleInputComponent {}
