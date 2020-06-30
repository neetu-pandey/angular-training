import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'fis-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css'],
  animations: [
    trigger('stagger', [
      transition('* => *', [
        query(':enter', [
            style({ opacity: 0 }),
            stagger(1000, [animate('0.5s', style({ opacity: 1 }))])
          ], { optional: true }
        )
      ])
    ])
  ]
})
export class Example4Component implements OnInit {

  items = [1,2,3,4];
  show = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=> {
      this.show = !this.show;
    }, 4000);
  }

}
