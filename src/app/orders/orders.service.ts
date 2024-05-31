
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseUrl = 'https://localhost:7253/api/Command';
  constructor(private http: HttpClient) { }
  getCommand(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  getCommandsByClient(clientId: number,connectionString : string): Observable<any[]> {

  //  return this.http.get<any[]>(`${this.baseUrl}/client/${clientId}`);
    const body = { ConnectionString: connectionString };
    let apiUrl2 = `${this.baseUrl}/client/${clientId}`;

    return this.http.post<any>(apiUrl2, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }

}
