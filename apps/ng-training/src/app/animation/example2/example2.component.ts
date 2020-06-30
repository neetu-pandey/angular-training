import { Component, OnInit } from '@angular/core';
import { openCloseAnimation } from './../animations';

@Component({
  selector: 'fis-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css'],
  animations: [
    // animation triggers go here...
    openCloseAnimation
  ]
})
export class Example2Component implements OnInit {

  show = false;

  constructor() { }

  onAnimationEvent(event: AnimationEvent) {
    console.log(event);
  }

  ngOnInit(): void { }

}
