import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent {
  @Input() title :string="";
  @Input() icon :string="";
  @Input() number :string="";
}
