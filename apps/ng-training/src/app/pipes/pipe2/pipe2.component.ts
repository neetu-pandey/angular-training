import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fis-pipe2',
  templateUrl: './pipe2.component.html',
  styleUrls: ['./pipe2.component.css']
})
export class Pipe2Component implements OnInit {
  results: any[];
  searchTerm: string;

  constructor() { }

  ngOnInit(): void {
    this.results = [
      {
        "id": "1",
        "summary": "These are the results for the searched text",
      },
      {
        "id": "2",
        "summary": "Here are some more results you searched for",
      },
      {
        "id": "2",
        "summary": "Searching for answers, are we?",
      },
      {
        "id": "2",
        "summary": "What more could you ask for?",
      }
    ]
  }

  updateSearch(e) {
    this.searchTerm = e.target.value
  }

}
