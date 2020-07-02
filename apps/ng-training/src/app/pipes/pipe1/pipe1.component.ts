import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fis-pipe1',
  templateUrl: './pipe1.component.html',
  styleUrls: ['./pipe1.component.css']
})
export class Pipe1Component implements OnInit {

  name = 'Angular';
  car = {type:"Fiat", model:"500", color:"white"};
  birthday = new Date(1988, 3, 15);
  toggle = true;
  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  a: number = 0.289;
  b: number = 1122.3495;
  pi: number = 3.142222;
  e: number = 2.718281828459045;
  toggleDate() {
    this.toggle = !this.toggle;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
