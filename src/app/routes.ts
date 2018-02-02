import { Routes } from '@angular/router';
import { DashboardComponent, ComingSoonComponent } from './index';

export const appRoutes: Routes = [
    { path: 'app-dashboard', component: DashboardComponent},
    { path: 'app-comingsoon', component: ComingSoonComponent},
    { path: '', redirectTo: '/app-dashboard', pathMatch: 'full'}
];

