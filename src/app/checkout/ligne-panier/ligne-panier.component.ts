// ligne-panier.component.ts
import { Component, Input } from '@angular/core';
import { LignePanier } from 'src/app/models/ligne-panier.model';

@Component({
  selector: 'app-ligne-panier',
  templateUrl: './ligne-panier.component.html',
  styleUrls: ['./ligne-panier.component.scss'],
})
export class LignePanierComponent {
  @Input() lignePanier!: LignePanier;
}
