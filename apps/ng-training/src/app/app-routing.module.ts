import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShellComponent } from './shell/shell.component';
import { AnimationDemoComponent } from './animation/animation-demo/animation-demo.component';
import { FlexboxDemoComponent } from './flexbox/flexbox-demo/flexbox-demo.component';
import { RxjsDemoComponent } from './rxjs/rxjs-demo/rxjs-demo.component';
import { PipeDemoComponent } from './pipes/pipe-demo/pipe-demo.component';
import { I18nDemoComponent } from './i18n/i18n-demo/i18n-demo.component';
import { TestingDemoComponent } from './testing/testing-demo/testing-demo.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/ngdemo/home',
    pathMatch: 'full'
  },
  {
    path: 'ngdemo',
    component: ShellComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'animation',
        component: AnimationDemoComponent
      },
      {
        path: 'flexbox',
        component: FlexboxDemoComponent
      },
      {
        path: 'rxjs',
        component: RxjsDemoComponent
      },
      {
        path: 'pipes',
        component: PipeDemoComponent
      },
      {
        path: 'i18n',
        component: I18nDemoComponent
      },
      {
        path: 'testing',
        component: TestingDemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
