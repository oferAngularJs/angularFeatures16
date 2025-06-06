import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-method-one',
  imports: [FormsModule],
  templateUrl: './child-method-one.component.html',
  styleUrl: './child-method-one.component.css'
})
export class ChildMethodOneComponent {

  @Input() priceMethod_1!: number;

  @Output() priceMethod_1Change = new EventEmitter<number>();

  constructor() {
    console.log("ChildMethodOneComponent initialized with priceMethod_1: " + this.priceMethod_1);
  }

  OnPriceMethod_1Change($event: number) {
    console.log("Child priceMethod_1 changed to: " + this.priceMethod_1);
    this.priceMethod_1Change.emit($event);

  }

}
