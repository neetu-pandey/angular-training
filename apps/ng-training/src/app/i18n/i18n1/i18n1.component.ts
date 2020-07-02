import { Component } from '@angular/core';

@Component({
  selector: 'fis-i18n1',
  templateUrl: './i18n1.component.html',
  styleUrls: ['./i18n1.component.css']
})
export class I18n1Component {
  minutes = 0;
  gender = 'female';
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() { this.gender = 'male'; }
  female() { this.gender = 'female'; }
  other() { this.gender = 'other'; }

}
