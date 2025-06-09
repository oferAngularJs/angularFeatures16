import { Component, effect, signal } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { ChildMethodOneComponent } from "../child-method-one/child-method-one.component";
import { ChildMethodTwoComponent } from "../child-method-two/child-method-two.component";
import { ChildMethodThreeComponent } from "../child-method-three/child-method-three.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, ChildMethodOneComponent, ChildMethodTwoComponent, ChildMethodThreeComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentPrice = signal<myItem>({
  description : "myItem",
  price : 0,
  quantity : 0,
  totalPrice : 12.5}as myItem);

  priceMethod_1 : number = 1;

  priceMethod_2 = signal(2);

  priceMethod_3 = signal(3);

  constructor() {
    effect(() => {
      console.log("Parent price changed to: " + this.parentPrice().price);
    });
    console.log("Parent priceMethod_1 changed to: " + this.priceMethod_1);
    effect(() => {
      console.log("Parent priceMethod_2 changed to: " + this.priceMethod_2());
    });
    effect(() => {
      console.log("Parent priceMethod_3 changed to: " + this.priceMethod_3());
    });
  }

  // Getter and setter for the `price` property
  get price() {
    return this.parentPrice().price;
  }

  set price(newPrice: number) {
    const current = this.parentPrice();
    this.parentPrice.set({ ...current, price: newPrice });
  }

  priceMethod_1Change($event : number) {
    this.priceMethod_1 = $event;
    console.log("Parent priceMethod_1 changed to: " + this.priceMethod_1);
  }

}

export interface myItem {
  description: string;
  price: number;
  quantity: number;
  totalPrice: number;
}
