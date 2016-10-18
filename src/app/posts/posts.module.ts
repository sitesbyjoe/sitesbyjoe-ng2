import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
// Add the RxJS Observable operators we need in this app.
// import '../rxjs-operators';

import { postRouting, postRoutingProviders }  from './posts.routing';

// import { Portfolio } from './portfolio';
// import { PortfolioService } from './portfolio.service';
import { PostListComponent } from './post-list.component';
// import { PortfolioDetailComponent } from './portfolio-detail.component';

@NgModule({
  declarations: [
    PostListComponent,
    // PortfolioDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    postRouting
  ],
  providers: [
    // Portfolio,
    postRoutingProviders,
    // PortfolioService
  ],
  bootstrap: [PostListComponent]
})
export class PostsModule { }
