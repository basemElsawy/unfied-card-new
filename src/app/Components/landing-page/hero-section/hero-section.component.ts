import { Component } from '@angular/core';
import { SearchComponentComponent } from './search-component/search-component.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [SearchComponentComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {}
