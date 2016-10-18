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
  errorMessage: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.portfolio = this.getPortfolioDetail(id);
    });
  }

  getPortfolioDetail(id) {
    console.log(id);
    try {
      this.portfolioService.getPortfolioDetail(id)
      .subscribe(
        portfolio => this.portfolio = portfolio,
        error => this.errorMessage = error
      );
      console.log(this.portfolio);
      console.log(this.portfolio.photos);
    } catch (err) {
      console.log(err);
    }
  }

}
