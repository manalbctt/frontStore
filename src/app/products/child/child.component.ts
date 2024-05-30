import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { } 

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data: any[]) => {
        this.products = data;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  @Input() title: string = "";
  @Input() image: string = "";
  @Input() Categories: string = "";
  @Input() price: string = "";
  @Input() delprice: string = "";

}
