import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

const TicketTypes = [
  {
    id: 1,
    image: '../../../../assets/41_2022-637770877350704568-70 2.png',
    name: 'BRT',
    fullName: 'Bus Rapid Transit',
    availablity: 'Available for Reservation',
  },
  {
    id: 2,
    image: '../../../../assets/LRT 1.png',
    name: 'LRT',
    fullName: 'Light Rail Transport',
    availablity: 'Available for Reservation',
  },
  {
    id: 3,
    image:
      '../../../../assets/The first locally-made __train, which was manufactured factory _SEMAF_ Railway Equipment, to work on the third line of the Metro ( Egypt ) 1.png',
    name: 'Subway',
    fullName: 'Subway Train',
    availablity: 'Available for Reservation',
  },
  {
    id: 4,
    image: '../../../../assets/News and Media 1.png',
    name: 'Bus',
    fullName: 'Public Transport',
    availablity: 'Available for Reservation',
  },
  {
    id: 5,
    image: '../../../../assets/mono rail 1.png',
    name: 'Mono Rail',
    fullName: 'Mono Rail LRT',
    availablity: 'Available for Reservation',
  },
  {
    id: 6,
    image: '../../../../assets/mono rail 1.png',
    name: 'Multi Mode',
    fullName: 'Multi Ticket Mode',
    availablity: 'Available for Reservation',
  },
];

@Component({
  selector: 'app-ticket-types',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-types.component.html',
  styleUrl: './ticket-types.component.css',
})
export class TicketTypesComponent {
  tickets: any[];

  constructor() {
    this.tickets = TicketTypes;
  }
}
