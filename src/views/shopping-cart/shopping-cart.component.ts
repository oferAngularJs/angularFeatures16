import {Component, OnInit} from '@angular/core';
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

  items : Item [] = [];

  itemForm! : FormGroup;

  sum : number = 0;

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

}
