import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {
  posts: BlogPost[][] = [[],[],[]];
  currentPage: number = 0;
  @ViewChildren('tile') blogPostTileComponents: QueryList<BlogPostTileComponent>;
  constructor() {}
  
  ngOnInit() {
    this.posts[0].push(new BlogPost('title1', 'description1', 'text1aaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbcccccccccccddddddddddddd'));
    this.posts[0].push(new BlogPost('title2', 'description2', 'text2fffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssss'));
    this.posts[0].push(new BlogPost('title3', 'description3', 'text3'));

    this.posts[1].push(new BlogPost('title4', 'description1', 'text1aaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbcccccccccccddddddddddddd'));
    this.posts[1].push(new BlogPost('title5', 'description2', 'text2'));
    this.posts[1].push(new BlogPost('title6', 'description3', 'text3dddddddddddddddssssssssssssssssddddddddddddddddddddddddddd'));

    this.posts[2].push(new BlogPost('title7', 'description1', 'text1aaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbcccccccccccddddddddddddd'));
    this.posts[2].push(new BlogPost('title8', 'description2', 'text2'));
    this.posts[2].push(new BlogPost('title9', 'description3', 'text3'));

    
  }

  updateCurrentPage(pageClicked){
    console.log(pageClicked);
    this.currentPage = pageClicked;
  }

  expandAll(){
    this.blogPostTileComponents.forEach(e => {
      e.toggleText();
    });
  }


}
