import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fis-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-training';

  constructor() { }

  ngOnInit(): void {
  }

}
