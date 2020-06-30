import {
  animation, trigger, animateChild, group,
  transition, animate, style, query, state, keyframes
} from '@angular/animations';

export const openCloseAnimation = trigger('openClose', [
  state('open', style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
  })),
  state('closed', style({
    height: '100px',
    opacity: 0.5,
    backgroundColor: 'green'
  })),
  state('closing', style({
    height: '150px',
    opacity: 0.5,
    backgroundColor: 'lightgreen'
  })),
  state('opening', style({
    height: '150px',
    opacity: 0.5,
    backgroundColor: 'lightyellow'
  })),
  // open to closed
  transition('open => closed', [
    // animate('1s')
    animate('0.5s ease-in')
  ]),
  // closed to open
  transition('closed => open', [
    animate('0.5s')
  ]),
  // any state to closed
  transition('* => closed', [
    animate('1s')
  ]),
  // any state to open
  transition('* => open', [
    animate('0.5s')
  ]),
  // transition in both directions
  transition('open <=> closed', [
    animate('0.5s')
  ]),
  transition('* => open', [
    animate('1s',
      style({ opacity: '*' }),
    ),
  ]),
  // any change between 2 states
  transition('* => *', [
    animate('1s')
  ]),
  state(
    "true",
    style({ height: "100px", opacity: 1, backgroundColor: "red" })
  ),
  state(
    "false",
    style({ height: "100px", opacity: 0.5, backgroundColor: "orange" })
  ),
  transition("false <=> true", animate(500))
]);

export const SliderAnimation = trigger('slideStatus', [
  state('inactive', style({ backgroundColor: 'darkgray' })),
  state('active', style({ backgroundColor: 'red' })),

  transition('* => active', [
    animate('2s', keyframes([
      style({ backgroundColor: 'yellow', offset: 0 , opacity: 0.1}),
      style({ backgroundColor: 'orange', offset: 0.8, opacity: 0.6 }),
      style({ backgroundColor: 'red', offset: 1.0, opacity: 1 })
    ])),
  ]),
  transition('* => inactive', [
    animate('2s', keyframes([
      style({ backgroundColor: 'red', offset: 0, opacity: 0.1 }),
      style({ backgroundColor: 'yellow', offset: 0.2, opacity: 0.7 }),
      style({ backgroundColor: 'darkgray', offset: 1.0, opacity: 1 })
    ]))
  ]),

  // transition('* => active', [
  //   animate('2s', keyframes([
  //     style({ backgroundColor: 'yellow' }),
  //     style({ backgroundColor: 'orange' }),
  //     style({ backgroundColor: 'red' })
  //   ]))
  // ]),
]);

export const transAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);

// Routable animations
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
