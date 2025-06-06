import { CommonModule } from '@angular/common';
import { Component, effect, EventEmitter, Input, model, OnInit, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-price',
  imports: [CommonModule,FormsModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit {

  newPrice = signal<number>(0);

  ngOnInit(): void {
    this.newPrice.set(this.itemPrice());

  }

  itemPrice = model<number>(0);




  isBtnEditPricePressed = signal<boolean>(false);

  constructor() {
    effect(() => {

      console.log("Item price changed to: " + this.itemPrice());
    })
  }

  updateItemPrice() {
    this.isBtnEditPricePressed.set(true);

  }


  cancel() {
    this.newPrice.set(this.itemPrice());
    this.isBtnEditPricePressed.set(false);
  }


  saveItemPrice () {

    this.isBtnEditPricePressed.set(false);
    this.itemPrice.set(this.newPrice());
  }

}
