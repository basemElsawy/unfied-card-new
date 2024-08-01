import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navToggle: boolean = false;

  @HostListener('window:scroll', ['$event']) onWindowScroll(event: Event) {
    let windowPosition = window.scrollY;
    if (windowPosition > 100) {
      this.navToggle = true;
    } else {
      this.navToggle = false;
    }
  }
}
