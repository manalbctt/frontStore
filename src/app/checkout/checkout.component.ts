import { Component, OnInit } from '@angular/core';
import { PanierService } from './checkout.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  clientId: number = 0;
  panier: any; // Définissez le type approprié pour le panier
  lignesPanier: any[] = []; // Définissez le type approprié pour les lignes de panier

  constructor(
    private route: ActivatedRoute,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.clientId = +params['clientId'];

      this.panierService.getPanierByClientId(this.clientId).subscribe(
        (data) => {
          this.panier = data;
          console.log(this.panier);

          this.panierService.getLignesPanierByPanierId(this.panier.id).subscribe(
            (lignes) => {
              this.lignesPanier = lignes;
              console.log(this.lignesPanier);

              this.lignesPanier.forEach((ligne) => {
                this.panierService.getPhotosByVarianteId(ligne.varianteId).subscribe(
                  (photos) => {
                    ligne.image = photos.length > 0 ? photos[0].urlImage : '';
                  },
                  (error) => {
                    console.error(error);
                  }
                );

                this.panierService.getVarianteById(ligne.varianteId).subscribe(
                  (variante) => {
                    ligne.price = variante.prix; // Assurez-vous que 'price' est une propriété de Variante
                  },
                  (error) => {
                    console.error(error);
                  }
                )
                this.panierService.getProductById(ligne.varianteId).subscribe(
                  (product)=>{
                    ligne.title = product.name;
                    ligne.description=product.description;
                  },
                  (error)=>{
                    console.error(error);
                  }
                )
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

  getTotalItems(): number {
    return this.lignesPanier.reduce((total, ligne) => total + Number(ligne.quantite), 0);
  }

  getTotal(): number {
    return this.lignesPanier.reduce((total, ligne) => total + (ligne.price * ligne.quantite), 0);
  }
}