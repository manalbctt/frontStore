import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  /**
   *
   */
  constructor(private router: Router) {
    
  }
  @Input() title: string="";
  @Input() image: string="";
  @Input() price: string="";
  @Input() id: number=0;

   toHome(){
    this.router.navigate(['/detailsproduct', this.id]).then(() => {
      // Force a full page reload after navigation
      window.location.href = "/detailsproduct/${this.id}";
    });
  }
}
