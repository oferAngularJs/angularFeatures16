import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Item } from '../models/Item';
import { vegetablesFilter } from '../models/vegetables-Filter';

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

  find (filter:vegetablesFilter) : Observable<Item[]> {
    // return this.http.get<Item[]>(itemsFile).pipe(map(res=>
    //   res.filter(i=>i.description.toLowerCase().includes(filter.name.toLowerCase()))
    // ));
    return this.http.get<Item[]>(itemsFile).pipe(
      map((res: Item[]) => {
        if (!filter?.name) {
          console.log("return all items, name is empty");
          return res; // Return all items if no filter is provided
        }
        // Filter items
        // return res.filter(item =>
        //   item.description?.toLowerCase().includes(filter.name.toLowerCase())
        // );
        console.log("API Response:", res); // Debugging: Check what API returns
        return res.filter((item: Item) => {
          console.log("Filtering item:", item); // Debugging each item
          return item.description.toLowerCase().includes(filter.name.toLowerCase());
        });
      })
    );
  }

}
