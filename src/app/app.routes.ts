import { Routes } from '@angular/router';
import { ShoppingCartComponent} from '../views/shopping-cart/shopping-cart.component';

export const routes: Routes = [
  { path: '', component:ShoppingCartComponent},
  { path: 'shoppingCart', component:  ShoppingCartComponent},

];
