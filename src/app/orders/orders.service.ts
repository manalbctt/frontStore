
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  getCommandsByClient(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/client/${clientId}`);
  }

}
