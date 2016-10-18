import { Component, OnInit } from '@angular/core';
// import { Portfolio } from './portfolio';
// import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  providers: [
    //Portfolio,
    //PortfolioService
  ]
})
export class PostListComponent implements OnInit {

  //portfolio: Portfolio[];
  //errorMessage: any;
  heading:string = 'Post List Component';

  constructor(
    //private portfolioService: PortfolioService
  ) {}

  ngOnInit() {
    this.getPostList();
  }

  getPostList() {
    console.log('get post list');
    /*try {
      this.portfolioService.getPortfolioList()
      .subscribe(
        portfolio => this.portfolio = portfolio,
        error => this.errorMessage = error
      );
    } catch (err) {
      console.log(err);
    }*/
  }

}
