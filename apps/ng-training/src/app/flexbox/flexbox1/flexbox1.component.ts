import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fis-flexbox1',
  templateUrl: './flexbox1.component.html',
  styleUrls: ['./flexbox1.component.css']
})
export class Flexbox1Component implements OnInit {

  flexDirection = 'row';
  flexWrap = 'nowrap';
  justifyContent = 'flex-start';
  alignItems = 'stretch';
  alignContent = 'stretch';

  constructor() { }

  ngOnInit(): void {
  }

  getStyleValues() {
    const styleValues = {}
    styleValues['flex-direction'] = this.flexDirection;
    styleValues['flex-wrap'] = this.flexWrap;
    styleValues['justify-content'] = this.justifyContent;
    styleValues['align-items'] = this.alignItems;
    styleValues['align-content'] = this.alignContent;
    return styleValues;
  }



}
