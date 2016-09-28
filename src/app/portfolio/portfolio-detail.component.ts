import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  providers: [PortfolioService]
})
export class PortfolioDetailComponent implements OnInit {

  constructor() {
    console.log('portfolio detail construct');
  }

  ngOnInit() {
    console.log('portfolio detail init');
  }

}
