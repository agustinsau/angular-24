import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { Router } from '@angular/router';
import { ProductCartService } from '../services/product-cart.service';
import { ProductDataService } from '../services/product-data.service';
import { ProductListStockService } from '../services/product-list-stock.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit{
  currentRoute: Router;
  
  products: Product [] = [];

  constructor(
    private router: Router, 
    private cartService: ProductCartService,
    private productsDataSvc: ProductDataService,
    private stockService: ProductListStockService) { 
      this.currentRoute = this.router;
  };

  ngOnInit(): void{

    //obtiene los productos desde la API, y setea el stock en el servicio
    this.productsDataSvc.getAll().subscribe(products => {
      this.products = products;
      this.stockService.setInitialStock(products);
    }); 

  };

  quantityAlert(mensaje: string): void{
    alert(mensaje);
  };
  
  addToCart(product: Product):void {
    if(product.quantity != 0 && product.quantity <= this.stockService.getStock(product.id)){
      
      this.cartService.addToCart(product);

      //actualiza el stock del producto en mi servicio
      this.stockService.updateStock(product.id, product.quantity);

      product.quantity = 0;
    }else{
      this.quantityAlert("Ingrese un valor valido para agregar al carrito.");
    }    
        
  };

  getStock(prodId: number): number {
    return this.stockService.getStock(prodId);
  };

}


