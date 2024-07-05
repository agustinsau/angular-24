import { Component, OnInit } from '@angular/core';
import { Product, CartProduct } from './Product';
import { Router } from '@angular/router';
import { ProductCartService } from '../services/product-cart.service';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent{
  currentRoute: Router;
  
  products: Product [] = [];

  /*
    {
      name:"Pan Flauta",
      stock: 120,
      price: 150,
      image: 'assets/images/panFlauta.png',
      discount: false,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name:"Biscochito",
      stock: 0,
      price: 800,
      image: 'assets/images/panFlauta.png',
      discount: false,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name:"Medialuna",
      stock: 100,
      price: 200,
      image: 'assets/images/panFlauta.png',
      discount: false,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name:"Chipa",
      stock: 5,
      price: 1500,
      image: 'assets/images/panFlauta.png',
      discount: true,
      quantity: 0,
      totalPrice: 0,
    },
  ];*/

  constructor(
    private router: Router, 
    private cart: ProductCartService,
    private productsDataSvc: ProductDataService) { 
      this.currentRoute = this.router;
  };

  ngOnInit(): void{
    this.productsDataSvc.getAll().subscribe(products => this.products = products);
  };

  quantityAlert(mensaje: string): void{
    alert(mensaje);
  };
  
  addToCart(product: Product):void {
    if(product.quantity != 0 && product.quantity <= product.stock){
      
      this.cart.addToCart(product);
      product.stock -= product.quantity;
      product.quantity = 0;
    }else{
      this.quantityAlert("Ingrese un valor valido para agregar al carrito.");
    }    
        
  };

}


