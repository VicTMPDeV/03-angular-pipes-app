//External Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Internal Modules
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './routes/app-router.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
