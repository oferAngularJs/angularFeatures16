import { Component, effect, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-method-three',
  imports: [FormsModule],
  templateUrl: './child-method-three.component.html',
  styleUrl: './child-method-three.component.css'
})
export class ChildMethodThreeComponent {

  childPriceMethod_3 = model();

  constructor() {
    console.log("ChildMethodThreeComponent initialized with childPriceMethod_3: " + this.childPriceMethod_3);
    effect(()=> {
      console.log("ChildMethodThreeComponent childPriceMethod_3 changed to: " + this.childPriceMethod_3());
    })
  }

}
