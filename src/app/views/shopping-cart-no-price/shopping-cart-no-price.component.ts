import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal,effect } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VegetablesService } from '../../services/vegetables.service';
import { Item } from '../../models/Item';
import { vegetablesFilter } from '../../models/vegetables-Filter';
import { ItemNoPriceComponent } from '../item-no-price/item-no-price.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {AddingVegetableModalComponent} from '../adding-vegetable-modal/adding-vegetable-modal.component';


@Component({
  selector: 'app-shopping-cart-no-price',
  imports: [FormsModule, ReactiveFormsModule, CommonModule,ItemNoPriceComponent,MatButtonModule,MatDialogModule],
  standalone : true,
  templateUrl: './shopping-cart-no-price.component.html',
  styleUrl: './shopping-cart-no-price.component.css'
})
export class ShoppingCartNoPriceComponent {

  readonly dialog = inject(MatDialog);

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
      let originalListItem : Item[] = this.items();
      let index = originalListItem.findIndex(i=>i.id == item.id);
      if (index !=-1){
        originalListItem[index] = item;
        this.items.set(originalListItem);
        console.log("Item updated : " + JSON.stringify(item));
      }

     }
     saveAll () {
      this.vegetablesService.save(this.items()).subscribe({
        next: () => {
          console.log("Items saved successfully");
        },
        error: (err) => {
          console.error("Error saving items:", err);
        }
      });

     }

    openAddingVegetableModal () {
      console.log("open Adding vegetable modal window");
      const dialogAddingVegetableModelRef = this.dialog.open(AddingVegetableModalComponent,{
        height: '600px',
        width: '600px',
        disableClose : true
      });

      dialogAddingVegetableModelRef.afterClosed().subscribe(vegetableDataForm=>{
        let vegetableDataValue = vegetableDataForm.value;
        let newItem : Item = {
            id : this.items().length + 1,
            code : vegetableDataValue.name.charAt(0) + (this.items().length + 1),
            description: vegetableDataValue.name,
            price: vegetableDataValue.price,
            image: "assets/images/vegetables/" + vegetableDataValue.image,
          }
          console.log("New item created: " + JSON.stringify(newItem));
      })
    }

     changeInItem(item : Item) {
      console.log("Item price changed to: " + item.price);

     }

}
