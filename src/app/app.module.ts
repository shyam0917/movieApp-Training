import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieComponent } from './movies/movie-list/movie/movie.component';
import { MessageService } from './message.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { FavMoviesComponent } from './fav-movies/fav-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieComponent,
    FavMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxPaginationModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
