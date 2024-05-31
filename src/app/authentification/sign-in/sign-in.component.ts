import { Component } from '@angular/core';
import {AuthService} from "../../auth.service";
import {loginDto} from "../../Dtos/loginDto";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private authService : AuthService) {
  }
  email : string ='';
  password : string ='';


  onSubmit() {

    // ConnectonString is in localStorage
    let ConnectionString : string=localStorage.getItem('connectionString') ?? '';
    const loginDto : loginDto = {Email : this.email,Password : this.password , ConnectionString : ConnectionString  };
    this.authService.login(loginDto).subscribe(
      Response => {
        console.log(Response);
        localStorage.setItem('token',Response);
        //
        this.authService.getClientId(Response).subscribe(
          Response => {
            console.log(Response);
            localStorage.setItem('idClient',Response.toString());
            //

          },
          Error => {
            console.log(Error);
          }
        );
      },
      Error => {
        console.log(Error);
      }
    );

  }
}
