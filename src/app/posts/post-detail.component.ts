import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostService } from './posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {

  post: any;
  errorMessage: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      console.log(params);
      let year = params['year'];
      let month = params['month'];
      let day = params['day'];
      let slug = params['slug'];

      this.post = this.getPostDetail(year, month, day, slug);
    });
  }

  getPostDetail(year, month, day, slug) {

    try {
      this.postService.getPostDetail(year, month, day, slug)
      .subscribe(
        post => this.post = post,
        error => this.errorMessage = error
      );
      console.log(this);
      //console.log(this.portfolio.photos);
    } catch (err) {
      console.log(err);
    }
  }

}
