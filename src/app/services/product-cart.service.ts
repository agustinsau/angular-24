import { Injectable } from '@angular/core';
import { Product, CartProduct } from '../product-list/Product';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Logica del carrito
*/ 

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {
  //lista productos del carrito
  private _productsCart: CartProduct[] = [];
  public productsCart: BehaviorSubject<CartProduct[]> = new BehaviorSubject (this._productsCart);

  //monto total del carrito
  public cartTotal: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
  constructor() { }

  private castCartProduct(product: Product): CartProduct {
    return {
        ...product,
        totalPrice: 0
    };
}

  addToCart(product: Product): void {
    let item: CartProduct | undefined | null = null

    item = this._productsCart.find(v1 => v1.name == product.name); //arrow function para comparar
    
    let cartProduct: CartProduct = this.castCartProduct(product);
    
    if(!item){
      this._productsCart.push({... cartProduct}); 

    } else {
      item.quantity+= product.quantity;
    }

    //indico el siguiente valor del observable
    this.productsCart.next(this._productsCart);
    this.updateTotalPrices();
  }

  updateTotalPrices(): void {
    let cartTotalPrice : number = 0;
    let prodTotalPrice: number = 0;

    this._productsCart.forEach(product => {
      prodTotalPrice = product.price * product.quantity;
      product.totalPrice = prodTotalPrice;
      cartTotalPrice += product.totalPrice;
    });

    this.cartTotal.next(cartTotalPrice);
  }

  getCartProducts(): Product[] {
    return this._productsCart;
  }

  // deleteProduct(id: number): void {
  //   this._productsCart = this._productsCart.filter(p => p.id !== id);
  //   this.updateTotalPrices();
  // }



  

  
}
