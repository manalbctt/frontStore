import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-latest',
  templateUrl: './single-latest.component.html',
  styleUrls: ['./single-latest.component.scss']
})
export class SingleLatestComponent {
  @Input() title :string="";
  @Input() image :string="";
  @Input() categories :string="";
  @Input() price :string="";
}
