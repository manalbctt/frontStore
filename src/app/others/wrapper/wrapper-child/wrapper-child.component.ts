import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper-child',
  templateUrl: './wrapper-child.component.html',
  styleUrls: ['./wrapper-child.component.scss']
})
export class WrapperChildComponent {
  @Input() title :string="";
  @Input() price :string="";
  @Input() description :string="";
  @Input() link :string="";
  @Input() image :string="";
  @Input() alt :string="";
  @Input() it :string="";
}
