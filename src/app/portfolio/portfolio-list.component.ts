import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  providers: [PortfolioService]
})
export class PortfolioListComponent implements OnInit {

  constructor() {
    console.log('portfolio list construct');
  }

  ngOnInit() {
    console.log('portfolio list init');
  }

}
