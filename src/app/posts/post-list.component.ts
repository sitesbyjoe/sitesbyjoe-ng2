import { Component, OnInit } from '@angular/core';
// import { Portfolio } from './portfolio';
import { PostService } from './posts.service';

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
  errorMessage: any;
  heading:string = 'Post List Component';
  posts: string[];

  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
    this.getPostList();
  }

  getPostList() {
    console.log('get post list');
    try {
      this.postService.getPostList()
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = error
      );
    } catch (err) {
      console.log(err);
    }
  }

}
