import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fis-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Home',
        link: './home',
        index: 0
      },
      {
        label: 'Animation',
        link: './animation',
        index: 1
      },
      {
        label: 'Flexbox',
        link: './flexbox',
        index: 2
      },
      {
        label: 'RxJS',
        link: './rxjs',
        index: 3
      },
      {
        label: 'Pipes',
        link: './pipes',
        index: 4
      },
      {
        label: 'i18n',
        link: './i18n',
        index: 5
      },
      {
        label: 'Unit Testing',
        link: './testing',
        index: 6
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
