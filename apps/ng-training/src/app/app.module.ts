import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { AnimationDemoComponent } from './animation/animation-demo/animation-demo.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { Example1Component } from './animation/example1/example1.component';
import { Example2Component } from './animation/example2/example2.component';
import { Example3Component } from './animation/example3/example3.component';
import { FlexboxDemoComponent } from './flexbox/flexbox-demo/flexbox-demo.component';
import { Flexbox1Component } from './flexbox/flexbox1/flexbox1.component';
import { Flexbox2Component } from './flexbox/flexbox2/flexbox2.component';
import { CardComponent } from './flexbox/card/card.component';
import { RxjsDemoComponent } from './rxjs/rxjs-demo/rxjs-demo.component';
import { Rxjs1Component } from './rxjs/rxjs1/rxjs1.component';
import { Rxjs2Component } from './rxjs/rxjs2/rxjs2.component';
import { Example4Component } from './animation/example4/example4.component';
import { Flexbox3Component } from './flexbox/flexbox3/flexbox3.component';
import { AnimationLinksComponent } from './animation/animation-links/animation-links.component';
import { FlexboxLinksComponent } from './flexbox/flexbox-links/flexbox-links.component';
import { Rxjs3Component } from './rxjs/rxjs3/rxjs3.component';
import { Rxjs4Component } from './rxjs/rxjs4/rxjs4.component';
import { RxjsLinksComponent } from './rxjs/rxjs-links/rxjs-links.component';
import { PipeDemoComponent } from './pipes/pipe-demo/pipe-demo.component';
import { Pipe1Component } from './pipes/pipe1/pipe1.component';
import { Pipe2Component } from './pipes/pipe2/pipe2.component';
import { PipeLinksComponent } from './pipes/pipe-links/pipe-links.component';
import { I18nDemoComponent } from './i18n/i18n-demo/i18n-demo.component';
import { I18n1Component } from './i18n/i18n1/i18n1.component';
import { I18n2Component } from './i18n/i18n2/i18n2.component';
import { I18nLinksComponent } from './i18n/i18n-links/i18n-links.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NgTrainingService } from './services/ng-training.service';
import { HighlightPipe } from './pipes/highlight.pipe';
import { TestingDemoComponent } from './testing/testing-demo/testing-demo.component';
import { Testing1Component } from './testing/testing1/testing1.component';
import { TestingLinksComponent } from './testing/testing-links/testing-links.component';
import { Testing2Component } from './testing/testing2/testing2.component';
import { Pipe3Component } from './pipes/pipe3/pipe3.component';
import { FilterPipe } from './pipes/filter.pipe';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent, ShellComponent, HomeComponent, AnimationDemoComponent, TabsContainerComponent, Example1Component, Example2Component, Example3Component, FlexboxDemoComponent, Flexbox1Component, Flexbox2Component, CardComponent, RxjsDemoComponent, Rxjs1Component, Rxjs2Component, Example4Component, Flexbox3Component, AnimationLinksComponent, FlexboxLinksComponent, Rxjs3Component, Rxjs4Component, RxjsLinksComponent, PipeDemoComponent, Pipe1Component, Pipe2Component, PipeLinksComponent, I18nDemoComponent, I18n1Component, I18n2Component, I18nLinksComponent, HighlightPipe, TestingDemoComponent, Testing1Component, TestingLinksComponent, Testing2Component, Pipe3Component, FilterPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatRadioModule,
    MatTabsModule,
    MatToolbarModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [NgTrainingService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
