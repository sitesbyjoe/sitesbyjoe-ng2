import { RouterModule } from '@angular/router';
import { PortfolioListComponent } from './portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail.component';
var appRoutes = [
    { path: 'portfolio', component: PortfolioListComponent },
    { path: 'portfolio/detail/:id', component: PortfolioDetailComponent }
];
export var appRoutingProviders = [];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=../../../../src/app/portfolio/portfolio.routing.js.map