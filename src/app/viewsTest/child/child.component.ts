import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  childPrice = model(0.0);

  @Output() childPriceChange = new EventEmitter<number>();



  onPriceChange(event: Event) {
    const newValue = parseFloat((event.target as HTMLInputElement).value);
    this.childPriceChange.emit(newValue);
  }

}
