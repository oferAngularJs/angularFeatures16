import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-method-two',
  imports: [FormsModule],
  templateUrl: './child-method-two.component.html',
  styleUrl: './child-method-two.component.css'
})
export class ChildMethodTwoComponent {

  @Input() childPriceMethod_2!: number;
  @Output() childPriceMethod_2Change = new EventEmitter<number>();

  constructor() {
    console.log("ChildMethodTwoComponent initialized : " + this.childPriceMethod_2);
  }



  onChildMethod_2Change($event: number) {
    this.childPriceMethod_2Change.emit($event);
    console.log("ChildMethodTwoComponent childMethod_2 changed to: " + this.childPriceMethod_2);
  }

}
