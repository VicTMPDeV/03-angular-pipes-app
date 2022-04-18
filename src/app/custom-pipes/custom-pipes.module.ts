//External Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Internal Modules
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

//Components (Pages)
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { SortComponent } from './pages/sort/sort.component';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    SortComponent
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    SortComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class CustomPipesModule { }
