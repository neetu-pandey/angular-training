import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fis-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  tabNames = ['Built-in Pipes', 'Custom Pipes'];

  constructor() { }

  ngOnInit(): void {
  }

}
