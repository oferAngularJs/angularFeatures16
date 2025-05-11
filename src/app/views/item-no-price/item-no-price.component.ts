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



    isBtnEditPricePressed = signal<boolean>(false);

    updateItemPrice() {
      this.isBtnEditPricePressed.set(true);

    }

    cancel() {
      this.isBtnEditPricePressed.set(false);
    }

    saveItemPrice () {

      this.isBtnEditPricePressed.set(false);
      console.log("Set product : " + this.item.description + " to price : " );

    }

}
