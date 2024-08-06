import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
