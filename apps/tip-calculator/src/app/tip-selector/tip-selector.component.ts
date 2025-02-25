import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tip-selector',
  imports: [NgFor],
  templateUrl: './tip-selector.component.html',
  styleUrl: './tip-selector.component.css',
})
export class TipSelectorComponent {
  defaultTips = [5, 10, 15, 25, 50];
}
