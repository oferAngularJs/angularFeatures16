import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';

const itemsFile = '/assets/vegetables.json';

@Injectable({
  providedIn: 'root'
})

export class VegetablesService {

  http = inject(HttpClient);



  constructor() { }

  getAll () : Observable<Item []> {
    return this.http.get<Item []>(itemsFile);
  }

}
