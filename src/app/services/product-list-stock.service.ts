import { Injectable } from '@angular/core';
import { Product } from '../product-list/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListStockService {

  constructor() { }

  private _stockLevels: { [id: number]: number } = {};
  public stockLevels: BehaviorSubject <{ [id: number]: number }> = new BehaviorSubject (this._stockLevels);

  //setea stock de los productos en el servicio
  setInitialStock(products: Product[]): void {
    products.forEach(product => {
      if (this._stockLevels[product.id] === undefined) {
        this._stockLevels[product.id] = product.stock;
      }
    });

    this.stockLevels.next(this._stockLevels);
  }

  updateStock(productId: number, stock: number): void {
    if (this._stockLevels[productId] >= 0) {
      console.log('cantidad ' + stock);
      console.log('antes ' + this._stockLevels[productId]);
      this._stockLevels[productId] += -stock;
      console.log('despues ' + this._stockLevels[productId]);

      //indico el siguiente valor del observable
      this.stockLevels.next(this._stockLevels);
    
    }
  }

  getStock(productId: number): number {
    return this._stockLevels[productId];
  }

}
