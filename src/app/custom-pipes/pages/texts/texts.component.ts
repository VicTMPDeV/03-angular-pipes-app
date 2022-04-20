import { Component } from '@angular/core';

@Component({
  selector: 'app-commons',
  templateUrl: './texts.component.html',
  styles: [
  ]
})
export class TextsComponent {

  public nameLower: string = 'victor';
  public nameUpper: string = 'VICTOR';
  public nameTitle: string = 'vIcToR';

}
