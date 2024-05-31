import { Component } from '@angular/core';
import {registerDto} from "../../Dtos/registerDto";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private authService : AuthService) {
  }
  email : string ='';
  password : string ='';
  Username : string ='';

  onSubmit() {
// ConnectonString is in localStorage
    let ConnectionString : string=localStorage.getItem('connectionString') ?? '';
    const loginDto : registerDto = {Username : this.Username,Email : this.email,Password : this.password , ConnectionString : ConnectionString  };
    this.authService.register(loginDto).subscribe(
      Response => {
        console.log(Response);
       // localStorage.setItem('id',Response);
      },
      Error => {
        console.log(Error);
      }
    );
  }
}
