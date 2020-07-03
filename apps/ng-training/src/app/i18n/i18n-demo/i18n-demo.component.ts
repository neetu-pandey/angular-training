import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fis-i18n-demo',
  templateUrl: './i18n-demo.component.html',
  styleUrls: ['./i18n-demo.component.css']
})
export class I18nDemoComponent implements OnInit {

  tabNames = ['Native', '@ngx-translate'];

  constructor() { }

  ngOnInit(): void {
  }

}
