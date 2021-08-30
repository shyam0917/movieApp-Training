import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentState = false;
  constructor() { 
    if(localStorage.getItem('isLogin')){
      this.currentState = true;
    }else{
      this.currentState =false;
    }
  }

  ngOnInit(): void {
  }

  logout(){

  }

}
