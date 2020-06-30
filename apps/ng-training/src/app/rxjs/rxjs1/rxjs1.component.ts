import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, Observable, interval, fromEvent, Subject, Subscription } from 'rxjs';
import { ɵNgNoValidate } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'fis-rxjs1',
  templateUrl: './rxjs1.component.html',
  styleUrls: ['./rxjs1.component.css']
})
export class Rxjs1Component implements OnInit {
  res$: any;
  res: any;
  asyncRes: boolean;

  constructor() { }

  ngOnInit(): void { }

  getUsers() {
    this.res = [];
    const data = from(fetch('/api/users'));
    data.subscribe(res => {
      this.res$ = res.json();
      // this.res$.then(result => {
      //   this.res.push(result);
      // });
    });

    this.asyncRes = true;
  }

  getFromCounter() {
    this.res = [];
    const secondsCounter$ = interval(1000).pipe(take(10));
    // Subscribe to begin publishing values
    secondsCounter$.subscribe(
      n => this.res.push(`It's been ${n + 1} seconds since subscribing!`),
      err => console.log('error', err),
      () => this.res.push('Complete!!')
    );
    this.asyncRes = false;
  };

  getFromEvent() {
    const el = document.getElementById('my-element');

    // Create an Observable that will publish mouse movements
    const mouseMoves$ = fromEvent(el, 'mousemove');

    // Subscribe to start listening for mouse-move events
    const subscription = mouseMoves$.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      this.res = `Coords: ${evt.clientX} X ${evt.clientY}`;
      this.asyncRes = false;

      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
    });
  }

}
