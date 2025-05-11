import { CommonModule } from '@angular/common';
import { Component, effect, Input, model, OnInit, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-price',
  imports: [CommonModule,FormsModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit {
  ngOnInit(): void {
    this.newPrice.set(this.itemPrice());

  }

  // @Input() itemPrice!: number;
  itemPrice = model<number>(0);

  newPrice = signal<number>(1);

  isBtnEditPricePressed = signal<boolean>(false);

  constructor() {
    effect(() => {
      console.log("Price changed to: " + this.newPrice());
      console.log("Item price changed to: " + this.itemPrice());
    })
  }

  updateItemPrice() {
    this.isBtnEditPricePressed.set(true);

  }


  cancel() {
    this.isBtnEditPricePressed.set(false);
  }


  saveItemPrice () {
    this.itemPrice.set(this.newPrice());
    console.log("Set product : " + this.itemPrice() + " to price : " + this.newPrice());
  }

}
