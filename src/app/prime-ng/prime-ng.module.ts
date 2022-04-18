/*
  Angular Module only for export PrimeNg components
*/

//External Modules
import { NgModule } from '@angular/core';

//Prime Ng Components
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
