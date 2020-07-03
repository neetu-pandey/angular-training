import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fis-pipe3',
  templateUrl: './pipe3.component.html',
  styleUrls: ['./pipe3.component.css']
})
export class Pipe3Component implements OnInit {

  title = 'angular-text-search-highlight';
  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
