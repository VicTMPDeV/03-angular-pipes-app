import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent {

  public bigNumber: number = 2567789.5567;
  public currencyNumber: number = 12500.50;
  public percentNumber: number = 0.75;

}
