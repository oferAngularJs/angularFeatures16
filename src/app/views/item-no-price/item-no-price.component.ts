import { Component, Input, signal } from '@angular/core';
import { Item } from '../../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-item-no-price',
  imports: [CommonModule,FormsModule,PriceComponent],
  templateUrl: './item-no-price.component.html',
  styleUrl: './item-no-price.component.css'
})
export class ItemNoPriceComponent {

    @Input() item! : Item;

    price = signal<number>(1);

    isBtnEditPricePressed = signal<boolean>(false);

    updateItemPrice() {
      this.isBtnEditPricePressed.set(true);
      this.price.set(this.item.price);
    }

    cancel() {
      this.isBtnEditPricePressed.set(false);
    }

    saveItemPrice () {
      this.item.price = this.price();
      this.isBtnEditPricePressed.set(false);
      var input = document.getElementById('changePrice') as HTMLInputElement;
      if (input) {
        input.value = this.price().toString();
      }
      console.log("Set procut : " + this.item.description + " to price : " + this.price());

    }

}
