import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fis-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {

  tabNames = ['Creation', 'Operators', 'Subject', 'Filter List'];

  constructor() { }

  ngOnInit(): void {
  }

}
