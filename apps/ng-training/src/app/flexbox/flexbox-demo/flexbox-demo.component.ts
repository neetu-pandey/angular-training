import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fis-flexbox-demo',
  templateUrl: './flexbox-demo.component.html',
  styleUrls: ['./flexbox-demo.component.css']
})
export class FlexboxDemoComponent implements OnInit {

  tabNames = ['Flexbox', 'Flex Layout', 'Centering Element'];

  constructor() { }

  ngOnInit(): void {
  }

}
