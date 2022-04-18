import { Component } from '@angular/core';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styles: [
  ]
})
export class CommonsComponent {

  public nameLower: string = 'victor';
  public nameUpper: string = 'VICTOR';
  public nameTitle: string = 'vIcToR';

  public currentDate: Date = new Date();

}
