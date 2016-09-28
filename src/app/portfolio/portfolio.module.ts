import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }  from './portfolio.routing';

import { PortfolioService } from './portfolio.service';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioListComponent } from './portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail.component';

@NgModule({
  declarations: [
    PortfolioComponent,
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
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule { }
