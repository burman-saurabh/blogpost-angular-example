import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { BlogListService } from './blog-list.service';
import { SummaryPipe } from './summary.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostListComponent,
    BlogPostTileComponent,
    SummaryPipe,
    PaginationComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BlogListService,
    SummaryPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
