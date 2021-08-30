import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  @Output() success = new EventEmitter<any>();
  public moviesList = [];
   movieSearch: string ='';
  public searchResult: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  searchMovie() {
    console.log('ui',this.movieSearch);
    this.success.emit(this.movieSearch);
  }

}
