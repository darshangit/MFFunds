import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DashboardService } from './index-services';
import { DashboardComponent, AppFooterComponent, HeroComponentComponent } from './index';
import { appRoutes } from './routes';
import { HttpModule } from '@angular/http';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppFooterComponent,
    HeroComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TableModule,
    RouterModule.forRoot(appRoutes)

    ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
