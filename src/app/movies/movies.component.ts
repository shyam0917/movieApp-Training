import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [JsonService]
})
export class MoviesComponent implements OnInit {
  public movies =[];
  public hidden=true;
  public errorMsg ='';
  public showError : boolean = false;
  public favMovies=[];
  public flag = 'search';
  public searchText="";
  pageNo = 1;
  totalItems = 0;
  isTrending = true;

  constructor(private jsonService: JsonService, private messageService: MessageService) { }

  ngOnInit(): void {
this.messageService.showLoader(true);
this.getTrendingMovies();
  }

  getTrendingMovies(){
    this.jsonService.getTrendingMovies(this.pageNo).subscribe((res:any)=>{
      if(res){
        this.messageService.showLoader(false);
        this.movies = res.results;
        this.totalItems = res.total_results;
      }
    },err=>{

    })
  }

  getSearchKey(event:any){
    this.messageService.showLoader(true);
this.jsonService.getSearchMovies(event,this.pageNo).subscribe((res:any)=>{
  if(res){
    this.messageService.showLoader(false);
    this.movies = res.results;
    this.totalItems = res.total_results;
    this.flag = 'search';
  }
},err=>{
  this.messageService.showLoader(false);
})
  }

  pageChanged(event:any){
if(this.isTrending){
  this.pageNo = event;
  this.getTrendingMovies();
}
  }

}
