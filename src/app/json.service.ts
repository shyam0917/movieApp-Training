import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './config/config.constants';


@Injectable({
  providedIn: 'root'
})
export class JsonService {
 baseUrl = AppConfig.apiUrl;
 tmdbUrl = AppConfig.tmdbUrl;
 apKey = AppConfig.apiKey;
 updateCurrentState = new EventEmitter();
  constructor(private http: HttpClient) { }

  signup(userDetails: any){
return this.http.post( `${this.baseUrl}users`,userDetails);
  }

  getUser(userDetails: any) {
     return this.http.get(`${this.baseUrl}users`,{params: {email: userDetails.email,password: userDetails.password}});        
  }

  getTrendingMovies(pageNo: number){
    return this.http.get(`${this.tmdbUrl}trending/all/day?api_key=${this.apKey}&page=${pageNo}`)
  }

  getSearchMovies(movieName: string,pageNo: number){
    return this.http.get(`${this.tmdbUrl}search/movie?api_key=${this.apKey}&language=en-US&include_adult=false&query=${movieName}&page=${pageNo}`);
  }

  addToFavourite(movie: any){
    return this.http.post( `${this.baseUrl}movies`, movie);
  }

  getFavouriteMovies(){
    return this.http.get(`${this.baseUrl}movies`);
  }
}
