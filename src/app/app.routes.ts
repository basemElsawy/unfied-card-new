import { Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Core/auth/auth-views/core-views.routes').then((m) => m.routes),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./Components/view-control/views-routing-routing.routes').then(
        (m) => m.routes
      ),
  },
];
