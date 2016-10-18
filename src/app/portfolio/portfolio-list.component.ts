import { Component, OnInit } from '@angular/core';
import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  providers: [
    Portfolio,
    PortfolioService
  ]
})
export class PortfolioListComponent implements OnInit {

  portfolio: Portfolio[];
  errorMessage: any;

  constructor(
    private portfolioService: PortfolioService
  ) {}

  ngOnInit() {
    this.getPortfolioList();
  }

  getPortfolioList() {
    try {
      this.portfolioService.getPortfolioList()
      .subscribe(
        portfolio => this.portfolio = portfolio,
        error => this.errorMessage = error
      );
    } catch (err) {
      console.log(err);
    }
  }

}
