import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MoviesComponent } from './movies/movies.component';



const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'home', component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
