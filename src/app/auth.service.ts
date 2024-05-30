import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

}
