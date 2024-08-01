import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
];
