import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { Item } from '../../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-item-no-price',
  imports: [CommonModule,FormsModule,PriceComponent],
  standalone : true,
  templateUrl: './item-no-price.component.html',
  styleUrl: './item-no-price.component.css'
})
export class ItemNoPriceComponent {

    @Input() item! : Item;

    @Output() updatedItem = new EventEmitter<Item>();
    // isBtnEditPricePressed = signal<boolean>(false);

    // updateItemPrice() {
    //   this.isBtnEditPricePressed.set(true);

    // }

    // cancel() {
    //   this.isBtnEditPricePressed.set(false);
    // }

    // saveItemPrice () {

    //   this.isBtnEditPricePressed.set(false);
    //   console.log("In product : " + this.item.description + "price to price : "+this.item.price);

    // }

    saveNewPriceInItem($event : number) {
      this.item.price = $event;
      this.updatedItem.emit(this.item);
      console.log("In product : " + this.item.description + " price to price : "+this.item.price);
    }

}
