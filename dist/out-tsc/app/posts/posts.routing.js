import { RouterModule } from '@angular/router';
import { PostListComponent } from './post-list.component';
import { PostDetailComponent } from './post-detail.component';
var postRoutes = [
    { path: 'posts', component: PostListComponent },
    { path: 'posts/detail/:year/:month/:day/:slug', component: PostDetailComponent }
];
export var postRoutingProviders = [];
export var postRouting = RouterModule.forRoot(postRoutes);
//# sourceMappingURL=../../../../src/app/posts/posts.routing.js.map