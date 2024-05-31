import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  getPanierByClientId(clientId: number,connectionString : string): Observable<any> {
    const body = { ConnectionString: connectionString };
   // let apiUrl2 = `${this.baseUrl}/client/${clientId}`;
      let apiUrl2=`${this.apiUrl}/client/${clientId}`;
    return this.http.post<any>(apiUrl2, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
   // return this.http.post<any>(`${this.apiUrl}/client/${clientId}`);
  }
  getLignesPanierByPanierId(panierId: number,connectionString : string): Observable<any> {
    const body = { ConnectionString: connectionString };

    let apiUrl2=`${this.apiUrl2}/lignespanier/panier/${panierId}`;

    return this.http.post<any>(apiUrl2, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  getPhotosByVarianteId(varianteId:number ,connectionString : string): Observable<any>{
    const body = { ConnectionString: connectionString };

    let apiUrl2=`${this.apiUrl3}/${varianteId}`;

    return this.http.post<any>(apiUrl2, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    //return this.http.post<any>(`${this.apiUrl3}/${varianteId}`);
  }
  getVarianteById(Id: number,connectionString : string): Observable<any>{
    const body = { ConnectionString: connectionString };

    let apiUrl2=`${this.apiUrl4}/${Id}`;

    return this.http.post<any>(apiUrl2, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

   // return this.http.post<any>(`${this.apiUrl4}/${Id}`);
  }
  getProductById(ProductId: number,connectionString : string): Observable<any>{
    const body = { ConnectionString: connectionString };

    let apiUrl2=`${this.apiUrl5}/Product/variante/${ProductId}`;

    return this.http.post<any>(apiUrl2, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
   // return this.http.post<any>(`${this.apiUrl5}/Product/variante/${ProductId}`);
  }
}
