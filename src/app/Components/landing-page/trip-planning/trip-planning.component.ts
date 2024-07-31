import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
interface Methods {
  id: number;
  icon: string;
  name: string;
}
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
  selector: 'app-trip-planning',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './trip-planning.component.html',
  styleUrl: './trip-planning.component.css',
})
export class TripPlanningComponent implements OnInit {
  travelDetailsForm!: FormGroup;
  activeBtn!: number;
  methods: Methods[];
  constructor() {
    this.methods = travelingMethods;
  }
  ngOnInit(): void {
    this.travelDetailsForm = new FormGroup({
      currentLocation: new FormControl(null),
      destination: new FormControl(null),
    });
  }
  activeBtnSetter(activeIdx: number) {
    this.activeBtn = activeIdx;
  }
}
