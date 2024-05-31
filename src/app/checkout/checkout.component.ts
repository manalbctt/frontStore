import { Component, OnInit } from '@angular/core';
import { PanierService } from './checkout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeService } from '../stripe.service';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  clientId: number = 0;
  panier: any; // Définissez le type approprié pour le panier
  lignesPanier: any[] = []; // Définissez le type approprié pour les lignes de panier
  stripePromise: Promise<Stripe | null>; // Déclarez la propriété stripePromise

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private panierService: PanierService,
    private stripeService: StripeService
  ) {
    this.stripePromise = loadStripe(environment.stripePublishableKey); // Initialisez stripePromise dans le constructeur
  }

  ngOnInit(): void {
    // Votre code existant
  }

  async redirectToStripe() {
    if (this.lignesPanier.length === 0) {
      console.error('Le panier est vide.');
      return;
    }
  
    const items = this.lignesPanier.map(ligne => ({
      name: ligne.title,
      price: ligne.price,
      quantity: ligne.quantite,
    }));
    const currency = 'usd'; // ou toute autre devise que vous utilisez
  
    this.stripeService.createCheckoutSession(items, currency).subscribe(async response => {
      const stripe = await this.stripePromise;
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId: response.sessionId });
        if (error) {
          console.error('Erreur lors de la redirection vers Stripe Checkout:', error);
        }
      }
    });
  }
  

  getTotalItems(): number {
    return this.lignesPanier.reduce((total, ligne) => total + Number(ligne.quantite), 0);
  }

  getTotal(): number {
    return this.lignesPanier.reduce((total, ligne) => total + (ligne.price * ligne.quantite), 0);
  }
  continueShopping() {
    // Redirection vers HomeComponent
    this.router.navigate(['/']); // Redirige vers la page d'accueil (HomeComponent)
  }
}
