import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() title :string="";
  @Input() image :string="";
  @Input() description :string="";
  @Input() price :string="";
  @Input() categorie :string="";

}
