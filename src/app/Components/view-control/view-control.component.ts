import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared-ui/header/header.component';
import { FooterComponent } from '../../shared-ui/footer/footer.component';

@Component({
  selector: 'app-view-control',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './view-control.component.html',
  styleUrl: './view-control.component.scss',
})
export class ViewControlComponent {}
