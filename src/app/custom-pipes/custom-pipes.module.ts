//External Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Internal Modules
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

//Components (Pages)
import { DatesComponent } from './pages/dates/dates.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { SortComponent } from './pages/sort/sort.component';
import { TextsComponent } from './pages/texts/texts.component';

@NgModule({
  declarations: [
    DatesComponent,
    NumbersComponent,
    NotCommonsComponent,
    SortComponent,
    TextsComponent
  ],
  exports: [
    DatesComponent,
    NumbersComponent,
    NotCommonsComponent,
    SortComponent,
    TextsComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class CustomPipesModule { }
