import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ligne-panier',
  templateUrl: './ligne-panier.component.html',
  styleUrls: ['./ligne-panier.component.scss']
})
export class LignePanierComponent {
  @Input() title :string="";
  @Input() image :string="";
  @Input() description :string="";
  @Input() price :string="";
}
