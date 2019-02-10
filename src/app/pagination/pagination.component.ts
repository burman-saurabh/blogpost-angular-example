import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() noOfPages: number;
  @Output() pageClicked = new EventEmitter<number>();
  pages : number[];
  constructor() { }

  ngOnInit() {
    console.log(this.noOfPages);
    this.pages = new Array(this.noOfPages);
  }

  updateCurrentPage(pageClicked){
    console.log(pageClicked);
    this.pageClicked.emit(pageClicked);
  }
}
