import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';

const optional = { optional: true };
const fadeIn = [
  query(':leave', [
    style({ position: 'absolute', left: 0, right: 0, opacity: 1 })
  ], optional),
  query(':enter', [
    style({ position: 'absolute', left: 0, right: 0, opacity: 0 })
  ], optional),
  query(':leave', [
    animate('1s', style({ opacity: 0 }))
  ], optional),
  query(':enter', [
    animate('1s', style({ opacity: 1 }))
  ], optional)
]

@Component({
  selector: 'fis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-training';
}
