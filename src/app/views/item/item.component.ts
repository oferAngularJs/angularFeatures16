import { Component, Input } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() item! : Item;

}
