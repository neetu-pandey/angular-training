import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fis-testing-demo',
  templateUrl: './testing-demo.component.html',
  styleUrls: ['./testing-demo.component.css']
})
export class TestingDemoComponent implements OnInit {
  tabNames = ['Unit Testing (Student)'];

  constructor() { }

  ngOnInit(): void {
  }

}
