import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from '../product-list/Product';

const URL = "https://666a09da2e964a6dfed772b2.mockapi.io/api/bakehouse"

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  /*
  ** Consume la api y obtengo un observable de respuesta
  */

  public getAll(): Observable<Product[]>{
    //tipado de lo que obtiene el get y su endpoint
    
    return this.http.get<Product[]>(`${URL}/getAll`).pipe(
      tap((products: Product[]) => {
        products.forEach(product => product.quantity = 0);
      })
    );
              
  
  }
}
