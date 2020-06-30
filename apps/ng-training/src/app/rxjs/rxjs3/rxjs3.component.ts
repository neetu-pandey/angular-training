import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from "rxjs";

@Component({
  selector: 'fis-rxjs3',
  templateUrl: './rxjs3.component.html',
  styleUrls: ['./rxjs3.component.css']
})
export class Rxjs3Component implements OnInit {

  res = [];

  constructor() { }

  callSubject() {
    // Subject
    this.res = [];
    const observable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
    });

    const subject = new Subject();

    // subscriber 1
    subject.subscribe((data) => {
      this.res.push(`Subscriber 1: ${data}`);
    });

    // subscriber 2
    subject.subscribe((data) => {
      this.res.push(`Subscriber 2: ${data}`);
    });

    observable.subscribe(subject);
  }

  callBehaviorSubject() {
    this.res = [];
    const subject2 = new BehaviorSubject(1);

    // subscriber 1
    subject2.subscribe((data) => {
      this.res.push(`Subscriber 1: ${data}`);
    });

    subject2.next(2);
    subject2.next(3);

    // subscriber 2
    subject2.subscribe((data) => {
      this.res.push(`Subscriber 2: ${data}`);
    });

    subject2.next(4);
  }

  callReplaySubject() {
    this.res = [];
    const subject2 = new ReplaySubject();

    // subscriber 1
    subject2.subscribe((data) => {
      this.res.push(`Subscriber 1: ${data}`);
    });

    subject2.next(1);
    subject2.next(2);

    // subscriber 2
    subject2.subscribe((data) => {
      this.res.push(`Subscriber 2: ${data}`);
    });

    subject2.next(3);
  }

  callAsyncSubject() {
    this.res = [];
    const subject2 = new AsyncSubject();

    // subscriber 1
    subject2.subscribe((data) => {
      this.res.push(`Subscriber 1: ${data}`);
    });

    subject2.next(1);
    subject2.next(2);

    // subscriber 2
    subject2.subscribe((data) => {
      this.res.push(`Subscriber 2: ${data}`);
    });

    subject2.next(3);
    subject2.complete();
  }

  ngOnInit(): void {}

}
