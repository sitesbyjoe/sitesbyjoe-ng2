import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  providers: [PortfolioService]
})
export class PortfolioListComponent implements OnInit {

  portfolio: any;
  errorMessage: any;

  constructor(
    private portfolioService: PortfolioService
  ) {}

  ngOnInit() {
    this.getPortfolio();
  }

  getPortfolio() {
    //this.portfolio = this.portfolioService.getPortfolio(null);
    //console.log(this.portfolio);
    try {
      this.portfolioService.makeRequest()
      .subscribe(
        portfolio => this.portfolio = portfolio,
        error => this.errorMessage = error
      );
    } catch (err) {
      console.log(err);
    }
    //console.log(this.portfolio);
  }

}
