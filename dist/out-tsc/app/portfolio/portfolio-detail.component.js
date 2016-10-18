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
import { PortfolioService } from './portfolio.service';
export var PortfolioDetailComponent = (function () {
    function PortfolioDetailComponent(route, router, portfolioService) {
        this.route = route;
        this.router = router;
        this.portfolioService = portfolioService;
    }
    PortfolioDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.portfolio = _this.getPortfolioDetail(id);
        });
    };
    PortfolioDetailComponent.prototype.getPortfolioDetail = function (id) {
        var _this = this;
        console.log(id);
        try {
            this.portfolioService.getPortfolioDetail(id)
                .subscribe(function (portfolio) { return _this.portfolio = portfolio; }, function (error) { return _this.errorMessage = error; });
            console.log(this.portfolio);
            console.log(this.portfolio.photos);
        }
        catch (err) {
            console.log(err);
        }
    };
    PortfolioDetailComponent = __decorate([
        Component({
            selector: 'app-portfolio-detail',
            templateUrl: './portfolio-detail.component.html',
            providers: [PortfolioService]
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Router, PortfolioService])
    ], PortfolioDetailComponent);
    return PortfolioDetailComponent;
}());
//# sourceMappingURL=../../../../src/app/portfolio/portfolio-detail.component.js.map