import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';

import { ViewControlComponent } from './view-control.component';
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage',
  },
  {
    path: '',
    component: ViewControlComponent,
    children: [
      {
        path: 'homepage',
        loadChildren: () =>
          import('../landing-page/home-routing-routing.routes').then(
            (m) => m.routes
          ),
      },
    ],
  },
];
