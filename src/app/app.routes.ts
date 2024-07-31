import { Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: LandingPageComponent,
  },
];
