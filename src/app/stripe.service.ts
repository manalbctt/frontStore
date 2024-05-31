import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(private http: HttpClient) { }

  createCheckoutSession(items: any[], currency: string) {
    return this.http.post<{ sessionId: string }>(`${environment.apiUrl}/api/Paiement/create-checkout-session`, {
      items,
      currency,
      successUrl: 'http://localhost:4301/success', // URL de succès
      cancelUrl: 'http://localhost:4301/cancel'   // URL d'annulation
    });
  }
}