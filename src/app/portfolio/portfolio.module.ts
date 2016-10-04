import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// Add the RxJS Observable operators we need in this app.
// import '../rxjs-operators';

import { routing, appRoutingProviders }  from './portfolio.routing';

import { PortfolioService } from './portfolio.service';
import { PortfolioListComponent } from './portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail.component';

@NgModule({
  declarations: [
    PortfolioListComponent,
    PortfolioDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    PortfolioService
  ],
  bootstrap: [PortfolioListComponent]
})
export class PortfolioModule { }
