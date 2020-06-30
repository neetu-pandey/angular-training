import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShellComponent } from './shell/shell.component';
import { AnimationDemoComponent } from './animation/animation-demo/animation-demo.component';
import { FlexboxDemoComponent } from './flexbox/flexbox-demo/flexbox-demo.component';
import { RxjsDemoComponent } from './rxjs/rxjs-demo/rxjs-demo.component';

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
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
