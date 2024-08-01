import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';
@Component({
  selector: 'app-views',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './views.component.html',
  styleUrl: './views.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ViewsComponent {
  prepareRoute(outlet: any) {
    return outlet?.activatedRouteData?.animation;
  }
}
