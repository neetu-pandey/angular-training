import { Component } from '@angular/core';
import { KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'fis-pipe1',
  templateUrl: './pipe1.component.html',
  styleUrls: ['./pipe1.component.css']
})
export class Pipe1Component {

  text = 'My sTriNg to ChANge!';
  smallNumber: number = 1 / 7;
  percent = 0.12;
  money = 19.99;
  data: object = {
    name: 'User1', age: 25, food: 'Cheesecake',
    languages: [
      { name: 'JavaScript', proficiency: 'Wizard' },
      { name: 'Python', proficiency: 'Avergae' },
      { name: 'Elixir', proficiency: 'Beginner' }
    ]
  };
  array: number[] = [1, 2, 3, 4, 5, 6];
  date: Date = new Date();
  character: object;
  character$: Observable<any>;

  dataLoaded = false;
  person = {
    name: 'User1',
    age: '25',
    food: 'Cheesecake'
  };

  milliseconds = 1000 * 60 * 60 * 24;

  shortString = 'My name is User1';
  longString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  showLongString = false;

  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  toggleLongString() {
    this.showLongString = !this.showLongString;
  }

  constructor(private http: HttpClient) {
    this.http.get(`/api/customers`).subscribe(char => {
      this.character = char;
      this.dataLoaded = true;
    });
    this.character$ = this.http.get('/api/customers');
   }

  customCompareFn(a: KeyValue<string, string>, b: KeyValue<string, string>) {
    if (a.value.length > b.value.length) return -1;
    if (a.value.length === b.value.length) return 0;
    if (a.value.length < b.value.length) return 1;
  }

}
