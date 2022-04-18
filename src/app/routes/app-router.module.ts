//External Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Internal Modules
import { CommonsComponent } from '../custom-pipes/pages/commons/commons.component';
import { NotCommonsComponent } from '../custom-pipes/pages/not-commons/not-commons.component';
import { NumbersComponent } from '../custom-pipes/pages/numbers/numbers.component';
import { SortComponent } from '../custom-pipes/pages/sort/sort.component';

const routes: Routes = [
  {
    path:'',
    component: CommonsComponent,
    pathMatch: 'full'
  },
  {
    path:'numbers',
    component: NumbersComponent
  },
  {
    path:'not-commons',
    component: NotCommonsComponent
  },
  {
    path:'sort',
    component: SortComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
