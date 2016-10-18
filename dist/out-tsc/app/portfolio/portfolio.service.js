var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Portfolio } from './portfolio';
export var PortfolioService = (function () {
    function PortfolioService(http, portfolio) {
        this.http = http;
        console.log('constructing portfolio.service');
    }
    PortfolioService.prototype.getPortfolioList = function () {
        return this.http.get('http://sitesbyjoe.com/api/portfolio_list')
            .map(this.extractData);
    };
    PortfolioService.prototype.getPortfolioDetail = function (id) {
        return this.http.get('http://sitesbyjoe.com/api/portfolio_detail/' + id)
            .map(this.extractData);
    };
    PortfolioService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    PortfolioService.prototype.handleError = function (error) {
        console.log(error);
    };
    PortfolioService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, Portfolio])
    ], PortfolioService);
    return PortfolioService;
}());
//# sourceMappingURL=../../../../src/app/portfolio/portfolio.service.js.map