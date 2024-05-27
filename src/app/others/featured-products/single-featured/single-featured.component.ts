import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-featured',
  templateUrl: './single-featured.component.html',
  styleUrls: ['./single-featured.component.scss']
})
export class SingleFeaturedComponent {
  @Input() title :string="";
  @Input() image :string="";
  @Input() categories :string="";
  @Input() price :string="";
}
