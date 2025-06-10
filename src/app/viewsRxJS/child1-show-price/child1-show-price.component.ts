import { Component } from '@angular/core';
import {PriceService} from '../services/price.service';
import {takeUntil} from 'rxjs';
import {unsignedOnDestroyed} from '../unsignedOnDestroyed';

@Component({
  selector: 'app-child1-show-price',
  imports: [],
  standalone : true,
  templateUrl: './child1-show-price.component.html',
  styleUrl: './child1-show-price.component.css'
})
export class Child1ShowPriceComponent {

  price! : number;

  constructor(private priceService:PriceService) {
    this.priceService.priceData$.pipe(takeUntil(unsignedOnDestroyed(this))).subscribe(updatedPrice=>this.price = updatedPrice);


  }

  ngOnDestroy(): void {
  }

}
