import { Component, OnInit, Input } from '@angular/core';
import { AppConfig } from 'src/app/config/config.constants';
import { JsonService } from 'src/app/json.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: any;
  @Input() flag: string = '';
  movieUrl = AppConfig.baseImageUrl;

  constructor(private jsonService : JsonService) { }

  ngOnInit(): void {
  }

  addToFavorite(movieData: any){
this.jsonService.addToFavourite(movieData).subscribe(res=>{
  if(res){
    Swal.fire({
      icon: 'success',
      title: 'Movie Added Successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
})
  }

}
