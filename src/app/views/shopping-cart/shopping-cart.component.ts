import {Component, inject, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Item} from '../../models/Item';
import {CommonModule} from '@angular/common';
import { VegetablesService } from '../../services/vegetables.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-shopping-cart',
  standalone : true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,ItemComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit{



  constructor(private fb : FormBuilder) {
  }

  vegetablesService = inject(VegetablesService);
  items : Item[] = [];

  ngOnInit(): void {
    this.vegetablesService.getAll().subscribe(v=>{
      this.items.push(...v);
      console.log(JSON.stringify(v))

    });

  }



}
