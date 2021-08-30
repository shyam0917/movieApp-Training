import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/json.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [JsonService]
})
export class LoginComponent implements OnInit {
  userDetails= {
    email: '',
    password: ''
  }

  constructor(private jsonService: JsonService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: any){
    console.log('uD',loginForm);
    let userData = {
      email: loginForm.form.value.email,
      password: loginForm.form.value.password
    }
    this.jsonService.getUser(userData).subscribe((res: any)=>{
      if(res){
        if(res.length){
          Swal.fire({
            icon: 'success',
            title: 'LoggedIn Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
        localStorage.setItem('isLogin','true');
        this.router.navigate(['/home']);
        console.log('res',res);
      }
    })
  }

}
