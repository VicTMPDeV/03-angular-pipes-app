//External Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Internal Modules
import { PrimeNgModule } from '../prime-ng/prime-ng.module'; //Custom Module
//Internal Components
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
