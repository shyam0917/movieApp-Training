import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css']
})
export class FavMoviesComponent implements OnInit {
flag = 'fav';
favMovies = [];
totalItems = 0;
  constructor() { }

  ngOnInit(): void {
  }

  pageChanged(event: any){

  }

}
