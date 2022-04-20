//External Modules
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Components with animation

//Internal Modules
import { AppRouterModule } from './routes/app-router.module';
import { CustomPipesModule } from './custom-pipes/custom-pipes.module';
import { SharedModule } from './shared/shared.module';

//Components (AppComponent only)
import { AppComponent } from './app.component';

//Add App's Locales
// Step 1 -> import
import localeEs from '@angular/common/locales/es';
// import { default as localeEs } from '@angular/common/locales/es'; -> When something is exported as default (if we see inside package), these forms are correct
import localeFr from '@angular/common/locales/fr';
// Step 2 -> register imported
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    CustomPipesModule,
    SharedModule
  ],
  providers: [
    //Sets default App locale
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
