//External Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Internal Modules
import { AppRouterModule } from './routes/app-router.module';
import { CustomPipesModule } from './custom-pipes/custom-pipes.module';
import { SharedModule } from './shared/shared.module';

//Components (AppComponent only)
import { AppComponent } from './app.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
