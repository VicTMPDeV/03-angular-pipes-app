//External Modules
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Internal Modules
import { AppRouterModule } from './routes/app-router.module';
import { CustomPipesModule } from './custom-pipes/custom-pipes.module';
import { SharedModule } from './shared/shared.module';

//Components (AppComponent only)
import { AppComponent } from './app.component';

//Cambiar el Locale de la App
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    CustomPipesModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
