import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { openCloseAnimation } from '../animations';

@Component({
  selector: 'fis-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css']
})
export class AnimationDemoComponent implements OnInit {

  tabNames = ['Simple Animation', 'Animation Event', 'Keyframes', 'Complex Animation'];

  constructor() { }

  ngOnInit(): void {

  }

}
