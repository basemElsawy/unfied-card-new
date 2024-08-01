import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';
import { ViewsComponent } from './views.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { animation: 'login' },
      },
      {
        path: 'signup',
        component: SignUpComponent,
        data: { animation: 'signup' },
      },
    ],
  },
];
