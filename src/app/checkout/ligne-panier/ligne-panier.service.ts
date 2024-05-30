import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LignePanier } from 'src/app/models/ligne-panier.model';

@Injectable({
  providedIn: 'root',
})
export class LignePanierService {
  private apiUrl = 'https://localhost:7253/api/lignePanier';

  constructor(private http: HttpClient) {}

  getAllLignePaniers(): Observable<LignePanier[]> {
    return this.http.get<LignePanier[]>(this.apiUrl);
  }
}