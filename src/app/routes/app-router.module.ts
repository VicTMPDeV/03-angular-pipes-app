//External Modules
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
//Internal Modules
import { TextsComponent } from '../custom-pipes/pages/texts/texts.component';
import { DatesComponent } from '../custom-pipes/pages/dates/dates.component';
import { NotCommonsComponent } from '../custom-pipes/pages/not-commons/not-commons.component';
import { NumbersComponent } from '../custom-pipes/pages/numbers/numbers.component';
import { SortComponent } from '../custom-pipes/pages/sort/sort.component';

const routes: Routes = [
  {
    path:'',
    component: TextsComponent,
    pathMatch: 'full'
  },
  {
    path:'numbers',
    component: NumbersComponent
  },
  {
    path:'dates',
    component: DatesComponent
  },
  {
    path:'not-commons',
    component: NotCommonsComponent
  },
  {
    path:'sort',
    component: SortComponent
  },
  /* path:'**' is how Angular identifies a wildcard route. 
     Any route that does not match an existing route in your 
     configuration will use this route.
  */
  {
    path:'**',
    redirectTo:''
  }
];

// TODO: implement anchor in routing
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
