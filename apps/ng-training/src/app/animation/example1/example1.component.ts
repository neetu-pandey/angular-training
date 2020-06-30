import { Component, OnInit } from '@angular/core';
import { openCloseAnimation } from './../animations';

@Component({
  selector: 'fis-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
  animations: [
    openCloseAnimation
  ]
})
export class Example1Component implements OnInit {

  isOpen = true;
  state = 'open';

  constructor() { }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  changeState() {
    setTimeout(() => {
      this.state === 'open' ? this.state = 'closing' : this.state = 'opening';
    }, 0);
    setTimeout(() => {
      this.state === 'open' ? this.state = 'closed' : this.state = 'open';
    }, 3000);

  }

  onAnimationEvent(event: AnimationEvent) {
    if (event['fromState'] === 'open') {
      if (event['phaseName'] === 'start') {
        this.state = 'closing';
      } else {
        this.state = 'closed';
      }
    } else if (event['fromState'] === 'closed') {
      if (event['phaseName'] === 'start') {
        this.state = 'opening';
      } else {
        this.state = 'open';
      }
    }
  }

  ngOnInit(): void { }

}
