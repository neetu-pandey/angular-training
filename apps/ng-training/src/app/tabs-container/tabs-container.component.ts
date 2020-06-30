import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fis-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements OnInit {

  @Input() demoTabs: number;
  @Input() demoTabNames: string[] = [];

  tabName: 'aaa';

  constructor() { }

  ngOnInit(): void {
  }

}
