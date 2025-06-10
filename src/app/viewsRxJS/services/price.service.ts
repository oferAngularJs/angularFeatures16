import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  priceData$ = new BehaviorSubject(0);

  constructor() { }

  updatePrice (newPirce :  number){
    this.priceData$.next(newPirce);
  }
}
