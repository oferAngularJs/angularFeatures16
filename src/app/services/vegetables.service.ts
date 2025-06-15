import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Item } from '../models/Item';
import { vegetablesFilter } from '../models/vegetables-Filter';
import {saveAs } from 'file-saver';

const itemsFile = '/assets/vegetables.json';
const itemsOutputFile = 'updated_vegetablesUpdatedList.json';

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

  save (items : Item[]) : Observable<void> {
    // This method is a stub, as we don't have a backend to save the items
    // In a real application, you would send a POST or PUT request to your backend API
    console.log("Saving items:", items);
    return new Observable<void>(observer => {

        let blob : Blob = new Blob([JSON.stringify(items, null, 2)], { type: 'application/json' });
        saveAs(blob, itemsOutputFile);
        console.log("Items saved successfully");
        observer.next();
        observer.complete();
      }
    );

  }


}
