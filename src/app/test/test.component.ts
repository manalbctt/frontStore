import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdetailsService } from './productdetails.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productdetailsService: ProductdetailsService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productdetailsService.getProductById(id).subscribe(product => {
      this.product = product;
      console.log(product);
      console.log(product.variantes[0].idVariante);
    });
  }
}
