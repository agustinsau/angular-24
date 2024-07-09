import { Injectable } from '@angular/core';
import { Product, CartProduct } from '../product-list/Product';
import { BehaviorSubject } from 'rxjs';
import { ProductListStockService } from '../services/product-list-stock.service';


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

  //observable monto total del carrito
  public cartTotal: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private stockService: ProductListStockService) { }

  private castCartProduct(product: Product): CartProduct {
    return {
        ...product,
        totalPrice: 0
    };
  }

  addToCart(product: Product): void {
    //const stock = this.stockService.getStock(product.id);

    let item: CartProduct | undefined | null = null

    item = this._productsCart.find(v1 => v1.name == product.name); //arrow function para comparar
    
    let cartProduct: CartProduct = this.castCartProduct(product);
    
    if(!item){
      this._productsCart.push({... cartProduct});

    } else {
      item.quantity += product.quantity;
    }

    //actualiza el stock del producto en mi servicio
    //this.stockService.updateStock(product.id, product.quantity); 

    //indico el siguiente valor del observable
    this.productsCart.next(this._productsCart);
    this.updateTotalPrices();
  }

  //actualiza los totales de mi carrito, tanto de cada producto como del total
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

  deleteProduct(prodId: number, quantity: number): void {
    this._productsCart = this._productsCart.filter(p => p.id !== prodId); //rearma el carrito sin el producto que se quito
    this.productsCart.next(this._productsCart); //actualiza el carrito en mi servicio

    this.updateTotalPrices(); //actualiza el total de precios

    this.stockService.updateStock(prodId, -quantity); //devuelve el stock al producto

  }

  // deleteProduct(prodName: string): void {
  //   this._productsCart = this._productsCart.filter(p => p.name !== prodName); //rearma el carrito sin el producto que se quito
  //   this.productsCart.next(this._productsCart); //actualiza el carrito en mi servicio
  //   this.updateTotalPrices(); //actualiza el total de precios

  // }



  

  
}

