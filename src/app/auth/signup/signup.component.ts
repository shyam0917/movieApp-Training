import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/json.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [JsonService]
})
export class SignupComponent implements OnInit {

userDetails= {
  email: '',
  password: ''
}

  constructor(private jsonService: JsonService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(registerForm:any){
console.log('rf',registerForm);
let userData = {
  email: registerForm.form.value.email,
  password: registerForm.form.value.password
}
this.jsonService.signup(userData).subscribe(res=>{
  if(res){
    console.log('res',res);
    Swal.fire({
      icon: 'success',
      title: 'Successfully Registered',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(()=>{
      this.router.navigate(['/login'])
    },4000);
    // this.router.navigate(['/login'])
  }

},err=>{
  console.log('err',err);
})
  }

}
