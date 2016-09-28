import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'portfolio',
  template: `<router-outlet></router-outlet>`,
  providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {

  constructor() {
    console.log('portfolio construct');
  }

  ngOnInit() {
    console.log('portfolio init');
  }

}
