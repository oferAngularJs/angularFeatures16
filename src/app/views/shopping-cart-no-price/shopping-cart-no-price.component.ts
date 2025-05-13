import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal,effect } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VegetablesService } from '../../services/vegetables.service';
import { Item } from '../../models/Item';
import { vegetablesFilter } from '../../models/vegetables-Filter';
import { ItemNoPriceComponent } from '../item-no-price/item-no-price.component';

@Component({
  selector: 'app-shopping-cart-no-price',
  imports: [FormsModule, ReactiveFormsModule, CommonModule,ItemNoPriceComponent],
  templateUrl: './shopping-cart-no-price.component.html',
  styleUrl: './shopping-cart-no-price.component.css'
})
export class ShoppingCartNoPriceComponent {

  constructor(private fb : FormBuilder) {
    effect(()=>{
      console.log("list of items changed to:"+ JSON.stringify(this.items()));
    })
  }

      vegetablesService = inject(VegetablesService);
      items = signal<Item[]>([]);
      name = signal('');
      price = signal<number>(1);
      filterItems = computed(()=>{
        return this.items().filter(i=>i.description.toLowerCase().includes(this.name()));
      })

      ngOnInit(): void {
        // this.vegetablesService.getAll().subscribe(v=>{
        //   this.items.push(...v);
        //   console.log(JSON.stringify(v))

        // });
        this.search();
        // this.name = 'av';
        // this.search();
      }

      search () : void {
        /*
        if we don't use the search button, the search called only once
        and then filter done by the computed filter
        */
        const filter : vegetablesFilter = {
          name : this.name()
        };
        this.vegetablesService.find(filter).subscribe(items=>
          {
            this.items.set(items);
            console.log(this.items());
          });
      }


     updateItemInList(item : Item) {
      let orginalListItem : Item[] = this.items();
      let index = orginalListItem.findIndex(i=>i.id == item.id);
      if (index !=-1){
        orginalListItem[index] = item;
        this.items.set(orginalListItem);
        console.log("Item updated : " + JSON.stringify(item));
      }

     }
     saveAll () {

     }

}
