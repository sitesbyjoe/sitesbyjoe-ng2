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
import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';
export var PortfolioListComponent = (function () {
    function PortfolioListComponent(portfolioService) {
        this.portfolioService = portfolioService;
    }
    PortfolioListComponent.prototype.ngOnInit = function () {
        this.getPortfolioList();
    };
    PortfolioListComponent.prototype.getPortfolioList = function () {
        var _this = this;
        try {
            this.portfolioService.getPortfolioList()
                .subscribe(function (portfolio) { return _this.portfolio = portfolio; }, function (error) { return _this.errorMessage = error; });
        }
        catch (err) {
            console.log(err);
        }
    };
    PortfolioListComponent = __decorate([
        Component({
            selector: 'app-portfolio-list',
            templateUrl: './portfolio-list.component.html',
            providers: [
                Portfolio,
                PortfolioService
            ]
        }), 
        __metadata('design:paramtypes', [PortfolioService])
    ], PortfolioListComponent);
    return PortfolioListComponent;
}());
//# sourceMappingURL=../../../../src/app/portfolio/portfolio-list.component.js.map