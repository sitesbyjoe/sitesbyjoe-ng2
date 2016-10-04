import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  providers: [PortfolioService]
})
export class PortfolioDetailComponent implements OnInit {

  portfolio: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portfolioService: PortfolioService) {
    console.log('portfolio detail construct');
  }

  ngOnInit() {
    console.log('portfolio detail init');
    console.log(this);
    console.log(this.route.params);
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      console.log(id);
      this.portfolio = this.portfolioService.getPortfolio(id);
    });
  }



}
