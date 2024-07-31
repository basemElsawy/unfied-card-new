import { Component } from '@angular/core';
import { TravelingMethods } from '../../../../Models/Models';
import { CommonModule } from '@angular/common';

const travelingMethods = [
  {
    id: 1,
    icon: 'fa-solid fa-bus',
    name: 'Bus',
  },
  {
    id: 2,
    icon: 'fa-solid fa-bus-simple',
    name: 'BRT',
  },
  {
    id: 3,
    icon: 'fa-solid fa-train',
    name: 'Train',
  },
  {
    id: 4,
    icon: 'fa-solid fa-train-subway',
    name: 'Subway',
  },
  {
    id: 5,
    icon: 'fa-solid fa-train-tram',
    name: 'LRT',
  },
];

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css',
})
export class SearchComponentComponent {
  ticketTypes: TravelingMethods[];
  constructor() {
    this.ticketTypes = travelingMethods;
  }
}
