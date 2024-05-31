import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() title: string="";
  @Input() image: string="";
  @Input() price: string="";
  @Input() id: number=0;

}
