import { Component, inject, model, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VegetablesService } from '../../services/vegetables.service';
import { Item } from '../../models/Item';
import { vegetablesFilter } from '../../models/vegetables-Filter';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-shopping-cart2',
  imports: [FormsModule, ReactiveFormsModule, CommonModule,ItemComponent],
  templateUrl: './shopping-cart2.component.html',
  styleUrl: './shopping-cart2.component.css'
})
export class ShoppingCart2Component {

  constructor(private fb : FormBuilder) {
  }

    vegetablesService = inject(VegetablesService);
    items = signal<Item[]>([]);
    name = signal('');

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
      const filter : vegetablesFilter = {
        name : this.name()
      };
      this.vegetablesService.find(filter).subscribe(items=>
        {
          this.items.set(items);
          console.log(this.items());
        });
    }


}
