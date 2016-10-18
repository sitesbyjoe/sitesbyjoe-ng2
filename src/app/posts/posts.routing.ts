import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list.component';
// import { PortfolioDetailComponent } from './portfolio-detail.component';

const postRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  // { path: 'portfolio/detail/:id', component: PortfolioDetailComponent }
];

export const postRoutingProviders: any[] = [

];

export const postRouting: ModuleWithProviders = RouterModule.forRoot(postRoutes);
