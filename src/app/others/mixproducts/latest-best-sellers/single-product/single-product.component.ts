import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  @Input() title :string="";
  @Input() image :string="";
  @Input() Categories :string="";
  @Input() price :string="";
}
