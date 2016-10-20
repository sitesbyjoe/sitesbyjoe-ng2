import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {

  loading: boolean;
  data: Object;

  constructor(public http: Http) {
    console.log('constructing post.service');
  }

  getPostList() {
    return this.http.get('http://sitesbyjoe.com/api/post_list')
      .map(this.extractData);
  }

  // http://sitesbyjoe.com/api/posts_detail/2015/05/08/making-a-successful-web-product-is-hard
  getPostDetail(year, month, day, slug) {
    return this.http.get('http://sitesbyjoe.com/api/post_detail/' + year + '/' + month + '/' + day + '/' + slug)
      .map(this.extractData);
  }

  extractData(res) {
    console.log(res);
    let body = res.json();
    return body || {};
  }

}
