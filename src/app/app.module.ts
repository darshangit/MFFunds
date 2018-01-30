import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { DashboardComponent, AppFooterComponent, HeroComponentComponent } from './index';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppFooterComponent,
    HeroComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
