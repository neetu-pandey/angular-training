import { Component, OnInit } from '@angular/core';
import { SliderAnimation } from './../animations';

@Component({
  selector: 'fis-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css'],
  animations: [SliderAnimation]
})
export class Example3Component implements OnInit {

  status: 'active' | 'inactive' = 'inactive';

  constructor() { }

  ngOnInit(): void { }

  toggle() {
    if (this.status === 'active') {
      this.status = 'inactive';
    } else {
      this.status = 'active';
    }
  }
}
