import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'fis-i18n2',
  templateUrl: './i18n2.component.html',
  styleUrls: ['./i18n2.component.css']
})
export class I18n2Component {
  param = { value: 'Neetu' };

  constructor(private translateService: TranslateService) {
    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }

}
