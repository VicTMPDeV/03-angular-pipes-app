/*
  Angular Module only for export PrimeNg components
*/

//External Modules
import { NgModule } from '@angular/core';

//Prime Ng Components
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
