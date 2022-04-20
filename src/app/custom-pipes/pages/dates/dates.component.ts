import { Component } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styles: [
  ]
})
export class DatesComponent {

  public currentDate: Date = new Date();

}
