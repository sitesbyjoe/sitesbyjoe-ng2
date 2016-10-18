import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioListComponent } from './portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail.component';

const portfolioRoutes: Routes = [
  { path: 'portfolio', component: PortfolioListComponent },
  { path: 'portfolio/detail/:id', component: PortfolioDetailComponent }
];

export const portfolioRoutingProviders: any[] = [

];

export const portfolioRouting: ModuleWithProviders = RouterModule.forRoot(portfolioRoutes);
