import { RouterModule } from '@angular/router';
import { PostListComponent } from './post-list.component';
var postRoutes = [
    { path: 'posts', component: PostListComponent },
];
export var postRoutingProviders = [];
export var postRouting = RouterModule.forRoot(postRoutes);
//# sourceMappingURL=../../../../src/app/posts/posts.routing.js.map