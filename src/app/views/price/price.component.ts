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

  constructor() {
    effect(() => {
      console.log("Price changed to: " + this.newPrice());
      console.log("Item price changed to: " + this.itemPrice());
    })
  }







  saveItemPrice () {
    this.itemPrice.set(this.newPrice());
    console.log("Set procut : " + this.itemPrice() + " to price : " + this.newPrice());
  }

}
