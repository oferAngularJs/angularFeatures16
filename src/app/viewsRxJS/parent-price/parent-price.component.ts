import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PriceService} from '../services/price.service';
import {Child1ShowPriceComponent} from '../child1-show-price/child1-show-price.component';
import {Child2ShowPriceComponent} from '../child2-show-price/child2-show-price.component';

@Component({
  selector: 'app-parent-price',
  imports: [FormsModule,Child1ShowPriceComponent,Child2ShowPriceComponent],
  standalone : true,
  templateUrl: './parent-price.component.html',
  styleUrl: './parent-price.component.css'
})
export class ParentPriceComponent {

  price : number = 0;

  constructor(private priceService:PriceService) {
  }

  updateNewPrice (){
    console.log('priceUpdate from parent component to:'+this.price);
    this.priceService.priceData$.next(this.price);
  }

}
