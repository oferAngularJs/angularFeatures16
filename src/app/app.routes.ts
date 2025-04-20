import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { ShoppingCart2Component } from './views/shopping-cart2/shopping-cart2.component';
import { ShoppingCartTwoListsComponent } from './views/shopping-cart-two-lists/shopping-cart-two-lists.component';
import { ShoppingCartNoPriceComponent } from './views/shopping-cart-no-price/shopping-cart-no-price.component';

export const routes: Routes = [
  { path: '', redirectTo: '/shoppingCart2', pathMatch: 'full' },
  { path: 'shoppingCart', component:  ShoppingCartComponent},
  { path: 'shoppingCart2', component : ShoppingCart2Component},
  { path: 'shoppingCartTwoLists', component: ShoppingCartTwoListsComponent},
  { path: 'shoppingCartNoPrice', component: ShoppingCartNoPriceComponent}, // No price version
];
