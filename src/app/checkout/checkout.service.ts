import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panier } from '../models/checkout.model';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  private apiUrl = 'https://localhost:7253/api/Panier';
  private apiUrl2= 'https://localhost:7253/api/LignePanier';
  private apiUrl3= 'https://localhost:7253/api/PhotoVariante';
  private apiUrl4= 'https://localhost:7253/api/Variante';
  private apiUrl5= 'https://localhost:7253/api/Product';

  constructor(private http: HttpClient) {}

  getPanier(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getPanierByClientId(clientId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/client/${clientId}`);
  }
  getLignesPanierByPanierId(panierId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl2}/lignespanier/panier/${panierId}`);
  }
  getPhotosByVarianteId(varianteId: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl3}/${varianteId}`);
  }
  getVarianteById(Id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl4}/${Id}`);
  }
  getProductById(ProductId: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl5}/Product/variante/${ProductId}`);
  }
}