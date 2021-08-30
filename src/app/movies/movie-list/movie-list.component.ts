import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies: Array<any> = [];
  @Input() totalItems: any;
  @Input() flag:string='';
  @Output() onPageChanged = new EventEmitter();
  p: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  pageChanged(event:any){
    console.log('ev',event);
    this.p = event;
    this.onPageChanged.emit(event);
  }

}
