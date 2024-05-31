import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "./environments/environment";
import {loginDto} from "./Dtos/loginDto";
import {Observable} from "rxjs";
import {registerDto} from "./Dtos/registerDto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http : HttpClient) { }


  private apiUrl = environment.apiUrl;

  login(loginDto : loginDto): Observable<string> {
    const endpoint =`${this.apiUrl}/Client/login`;
    return this.http.post<any>(endpoint, loginDto, {responseType : 'text' as 'json'});
  }

  register(registerDto : registerDto) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Client/register`, registerDto);
  }


  getStoreUrl(idStore : Number) : Observable<string> {
    const endpoint = `${this.apiUrl}/Client/store/${idStore}`;

    return this.http.get<string>(endpoint, { responseType: 'text' as 'json' });
  }
  // getStoreUrl(idStore : Number) : Observable<any> {
  //   return this.http.get<any>(`${environment.plateformUrl}/Store/${idStore}`);
  // }

  getClientId(token : string){
    //  const apiUrl = 'https://localhost:7100/api/LoginVendeur';
    //const api =`${this.apiUrl}/LoginVendeur`
    const api ='https://localhost:7253/api/Client/jwt';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('Headers:', headers);
    return this.http.get(api, {'headers' :  headers });
  }

}
