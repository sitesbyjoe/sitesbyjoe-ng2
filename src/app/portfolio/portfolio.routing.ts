import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioListComponent } from './portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail.component';

const appRoutes: Routes = [
  { path: 'portfolio', component: PortfolioListComponent },
  { path: 'portfolio/detail/:id', component: PortfolioDetailComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
