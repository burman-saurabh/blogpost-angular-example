import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { SummaryPipe } from '../summary.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  
  styles: [`
    .card-title{
      color: red;
  }

  .card-title{
    background-color: grey;
  }

  `,
  `
  .card-title{
    background-color: pink;
  }`
],
  styleUrls: ['./blog-post-tile.component.css']

  
})
export class BlogPostTileComponent implements OnInit {

  @Input() post: BlogPost;
  postFullText: string;
  fullTextSummaryFlag: boolean = false;
  read: string = 'Read More';
  constructor(private summaryPipe: SummaryPipe) {

  }

  ngOnInit() {
    this.postFullText = this.getTextSummary();
  }

  getTextSummary(){
    return this.summaryPipe.transform(this.post.text, 30);
  }

  toggleText(){
    // debugger;
    console.log('okkk');
    this.fullTextSummaryFlag = !this.fullTextSummaryFlag;
    if(this.fullTextSummaryFlag){
      this.postFullText = this.post.text;
      this.read = 'Read Less';
    }else{
      this.postFullText = this.getTextSummary();
      this.read = 'Read More';
    }
  }

  favPost(){
    this.post.favorite = !this.post.favorite;
  }

}
