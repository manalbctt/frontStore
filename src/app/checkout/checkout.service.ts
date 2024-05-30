import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panier } from '../models/checkout.model';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  private apiUrl = 'https://localhost:7253/api/panier';

  constructor(private http: HttpClient) {}

  getAllPaniers(): Observable<Panier[]> {
    return this.http.get<Panier[]>(this.apiUrl);
  }
}
