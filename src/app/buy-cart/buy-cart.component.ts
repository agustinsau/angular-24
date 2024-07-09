import { Component, OnInit } from '@angular/core';
import { ProductCartService,  } from '../services/product-cart.service';
import { CartProduct } from '../product-list/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buy-cart',
  templateUrl: './buy-cart.component.html',
  styleUrls: ['./buy-cart.component.scss']
})

export class BuyCartComponent implements OnInit{
  ngOnInit(): void{ };
  
  //$ indica que la variable es un observable
  productsCart$: Observable <CartProduct[]>; 
  cartTotalPrice$: Observable <number>;

  constructor(private cartSrv: ProductCartService){
    this.productsCart$ = cartSrv.productsCart.asObservable();
    this.cartTotalPrice$ = cartSrv.cartTotal.asObservable();

  }

  deleteFromCart(prodId: number, quantity: number){
    this.cartSrv.deleteProduct(prodId, quantity);    
  }
}
