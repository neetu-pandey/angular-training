import { Component, OnInit } from '@angular/core';
import { of, interval, combineLatest, forkJoin } from 'rxjs';
import { map, filter, take, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'fis-rxjs2',
  templateUrl: './rxjs2.component.html',
  styleUrls: ['./rxjs2.component.css']
})
export class Rxjs2Component implements OnInit {
  res: any;
  asyncRes: boolean;

  constructor() { }

  ngOnInit(): void { }

  callMap() {
    const nums$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    this.res = [];

    const squareValues = map((val: number) => val * val);
    const squarednums$ = squareValues(nums$);

    squarednums$.subscribe(x => this.res.push(x));
    this.asyncRes = false;
  }

  callFilter() {
    const nums$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    this.res = [];

    // Create a function that accepts an Observable.
    const squareOdd$ = nums$.pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n),
    );

    // Subscribe to run the combined functions
    squareOdd$.subscribe(x => this.res.push(x));
  }

  callCombineLatest() {
    this.res = [];

    const source$ = interval(1000).pipe(take(5));
    source$.subscribe(x => this.res.push(`Source1: ${x}`));

    const source2$ = interval(2000).pipe(take(5));
    source2$.subscribe(x => this.res.push(`Source2: ${x}`));

    const source3$ = combineLatest(source$, source2$);
    source3$.subscribe(([x, y]) => this.res.push(`S1: ${x}  S2: ${y}`));
    this.asyncRes = false;
  }

  callForkJoin() {
    this.res = [];

    const source$ = interval(1000).pipe(take(5));
    source$.subscribe(x => this.res.push(`Source1: ${x}`));

    const source2$ = interval(2000).pipe(take(5));
    source2$.subscribe(x => this.res.push(`Source2: ${x}`));

    const source3$ = forkJoin(source$, source2$);
    source3$.subscribe(([x, y]) => this.res.push(`S1: ${x}  S2: ${y}`));

    this.asyncRes = false;
  }

}
