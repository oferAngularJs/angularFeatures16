import {Component, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Item} from '../../models/Item';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone : true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit{

  items = signal<Item []>([]);

  itemForm! : FormGroup;

  sum = signal<number>(0);

  constructor(private fb : FormBuilder) {
  }
  ngOnInit(): void {
    console.log(this.items)
    this.itemForm = this.fb.group({
      code : ['',Validators.required],

      description : ['',Validators.required],

      price : [0,Validators.required]


    })
  }

  addItem () {
    console.log("adding item to items :");
    console.log(this.itemForm.value);
    this.items.push(this.itemForm.value);
    this.sum=this.sum + Number(this.itemForm.get('price')?.value);
  }

  deleteItem (item : Item,idx : number) : void {
    console.log("The selected item "+JSON.stringify(item)+" in index="+idx);
    this.items = this.items.filter ((ele,index) => index!=idx);
    console.log("The elements :"+JSON.stringify(this.items));

  }

}
