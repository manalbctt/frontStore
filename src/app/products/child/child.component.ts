import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() title :string="";
  @Input() image :string="";
  @Input() Categories :string="";
  @Input() price :string="";
}
