import { RouterModule } from '@angular/router';
import { PortfolioListComponent } from './portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail.component';
var portfolioRoutes = [
    { path: 'portfolio', component: PortfolioListComponent },
    { path: 'portfolio/detail/:id', component: PortfolioDetailComponent }
];
export var portfolioRoutingProviders = [];
export var portfolioRouting = RouterModule.forRoot(portfolioRoutes);
//# sourceMappingURL=../../../../src/app/portfolio/portfolio.routing.js.map