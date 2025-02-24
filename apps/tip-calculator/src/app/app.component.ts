import { Component } from '@angular/core';
import { BillInputComponent } from "./bill-input/bill-input.component";
import { PeopleInputComponent } from "./people-input/people-input.component";
import { TipSelectorComponent } from "./tip-selector/tip-selector.component";
import { TipSummaryComponent } from "./tip-summary/tip-summary.component";

@Component({
  imports: [BillInputComponent, TipSelectorComponent, TipSummaryComponent, PeopleInputComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
