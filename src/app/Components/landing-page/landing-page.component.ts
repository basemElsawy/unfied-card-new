import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TicketTypesComponent } from './ticket-types/ticket-types.component';
import { TripPlanningComponent } from './trip-planning/trip-planning.component';
import { HeaderComponent } from '../../shared-ui/header/header.component';
import { LocalDelightsComponent } from './local-delights/local-delights.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    TicketTypesComponent,
    TripPlanningComponent,
    HeaderComponent,
    LocalDelightsComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
