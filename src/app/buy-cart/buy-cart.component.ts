import { Component } from '@angular/core';
import { ProductCartService } from '../services/product-cart.service';
import { CartProduct } from '../product-list/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buy-cart',
  templateUrl: './buy-cart.component.html',
  styleUrls: ['./buy-cart.component.scss']
})

export class BuyCartComponent {
  //buyCart: Cart;

  //$ indica que la variable es un observable
  productsCart$: Observable <CartProduct[]>; 
  cartTotalPrice$: Observable <number>;

  constructor(private cart: ProductCartService){
    this.productsCart$ = cart.productsCart.asObservable();
    this.cartTotalPrice$ = cart.cartTotal.asObservable();
  }
}
