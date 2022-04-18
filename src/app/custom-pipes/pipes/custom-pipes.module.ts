import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from '../pages/numbers/numbers.component';
import { NotCommonsComponent } from '../pages/not-commons/not-commons.component';
import { CommonsComponent } from '../pages/commons/commons.component';
import { SortComponent } from '../pages/sort/sort.component';



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
    CommonModule
  ]
})
export class CustomPipesModule { }
