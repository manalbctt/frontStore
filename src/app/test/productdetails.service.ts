import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {
  private apiUrl = 'https://localhost:7253/api/product'; 

  constructor(private http: HttpClient) { }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/details/${id}`);
  }
}
