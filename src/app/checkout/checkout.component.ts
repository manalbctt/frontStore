import { Component, OnInit } from '@angular/core';
import { Panier } from '../models/checkout.model';
import { PanierService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  paniers: Panier[] = [];

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.loadPaniers();
  }

  loadPaniers() {
    this.panierService.getAllPaniers().subscribe(
      (paniers) => {
        console.log('Fetched paniers:', paniers);
        this.paniers = paniers;
      },
      (error) => {
        console.error('Error fetching paniers:', error);
      }
    );
  }
}
