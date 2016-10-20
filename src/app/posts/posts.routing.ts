import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list.component';
import { PostDetailComponent } from './post-detail.component';

const postRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/detail/:year/:month/:day/:slug', component: PostDetailComponent }
];

export const postRoutingProviders: any[] = [];

export const postRouting: ModuleWithProviders = RouterModule.forRoot(postRoutes);
