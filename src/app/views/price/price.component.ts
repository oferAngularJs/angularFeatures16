import { CommonModule } from '@angular/common';
import { Component, effect, Input, OnInit, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-price',
  imports: [CommonModule,FormsModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit {
  ngOnInit(): void {
    this.newPrice.set(this.itemPrice);

  }

  @Input() itemPrice!: number;

  newPrice = signal<number>(1);

  constructor() {
    effect(() => {
      console.log("Price changed to: " + this.newPrice());
    })
  }





  @Output() priceChanged: (newPrice: number) => void = () => {};

}
