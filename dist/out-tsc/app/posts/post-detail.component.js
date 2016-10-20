var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from './posts.service';
var PostDetailComponent = (function () {
    function PostDetailComponent(route, router, postService) {
        this.route = route;
        this.router = router;
        this.postService = postService;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            console.log(params);
            var year = params['year'];
            var month = params['month'];
            var day = params['day'];
            var slug = params['slug'];
            _this.post = _this.getPostDetail(year, month, day, slug);
        });
    };
    PostDetailComponent.prototype.getPostDetail = function (year, month, day, slug) {
        var _this = this;
        try {
            this.postService.getPostDetail(year, month, day, slug)
                .subscribe(function (post) { return _this.post = post; }, function (error) { return _this.errorMessage = error; });
            console.log(this);
        }
        catch (err) {
            console.log(err);
        }
    };
    return PostDetailComponent;
}());
PostDetailComponent = __decorate([
    Component({
        selector: 'app-post-detail',
        templateUrl: './post-detail.component.html',
        providers: [PostService]
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        PostService])
], PostDetailComponent);
export { PostDetailComponent };
//# sourceMappingURL=../../../../src/app/posts/post-detail.component.js.map