import { Component, Input, model, signal } from '@angular/core';
import { Item } from '../../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  imports: [CommonModule,FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

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
