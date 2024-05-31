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
    const ConnectionString: any = localStorage.getItem('connectionString');
    this.route.params.subscribe((params) => {
      this.clientId = +params['clientId'];

      this.panierService.getPanierByClientId(this.clientId, ConnectionString).subscribe(
        (data) => {
          this.panier = data;
          console.log("this.panier", this.panier);

          this.panierService.getLignesPanierByPanierId(this.panier.id, ConnectionString).subscribe(
            (lignes) => {
              this.lignesPanier = lignes;
              console.log("this.lignesPanier", this.lignesPanier);

              this.lignesPanier.forEach((ligne) => {
                this.panierService.getPhotosByVarianteId(ligne.varianteId, ConnectionString).subscribe(
                  (photos) => {
                    ligne.image = photos.length > 0 ? photos[0].urlImage : '';
                  },
                  (error) => {
                    console.error(error);
                  }
                );

                this.panierService.getVarianteById(ligne.varianteId, ConnectionString).subscribe(
                  (variante) => {
                    ligne.price = variante.prix; // Assurez-vous que 'price' est une propriété de Variante
                  },
                  (error) => {
                    console.error(error);
                  }
                );

                this.panierService.getProductById(ligne.varianteId, ConnectionString).subscribe(
                  (product) => {
                    ligne.title = product.name;
                    ligne.description = product.description;
                  },
                  (error) => {
                    console.error(error);
                  }
                );
              });
            },
            (error) => {
              console.error(error);
            }
          );
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  async redirectToStripe() {
    let items = this.lignesPanier.map(ligne => ({
      name: ligne.title,
      price: ligne.price,
      quantity: ligne.quantite,
    }));

    // Si le panier est vide, ajoutez un article par défaut
    if (items.length === 0) {
      items = [{
        name: 'Default Item',
        price: 1000, // 10.00 USD
        quantity: 1,
      }];
    }

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
    // Redirection vers HomeComponent avec actualisation
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
