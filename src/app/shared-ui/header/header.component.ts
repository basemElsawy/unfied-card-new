import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
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
