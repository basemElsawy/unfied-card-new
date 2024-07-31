import { Component } from '@angular/core';
interface LocalDelights {
  id: number;
  name: string;
  description: string;
  image: string;
}

const localDelightsData = [
  {
    id: 1,
    name: 'Touristic Sites',
    description: 'Travel Back In Time At Egypts Touristic Sites',
    image: '../../../../assets/Vector.png',
  },
  {
    id: 2,
    name: 'Restaurants',
    description: 'Indulge Your Taste Buds at egypts finest restaurants',
    image: '../../../../assets/Layer_1.png',
  },
  {
    id: 3,
    name: 'Nearby Rides',
    description: 'Experience the Exhilaration of the majestic roads in egypt',
    image: '../../../../assets/Layer_1-1.png',
  },
];

@Component({
  selector: 'app-local-delights',
  standalone: true,
  imports: [],
  templateUrl: './local-delights.component.html',
  styleUrl: './local-delights.component.scss',
})
export class LocalDelightsComponent {
  delightsData: LocalDelights[];
  constructor() {
    this.delightsData = localDelightsData;
  }
}
