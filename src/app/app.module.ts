import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BuyCartComponent } from './buy-cart/buy-cart.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BakehouseProductsComponent } from './bakehouse-products/bakehouse-products.component';
import { BakehouseAboutComponent } from './bakehouse-about/bakehouse-about.component';
import { BakehouseComponent } from './bakehouse/bakehouse.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { BakehouseContactComponent } from './bakehouse-contact/bakehouse-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BuyCartComponent,
    BakehouseProductsComponent,
    BakehouseAboutComponent,
    BakehouseComponent,
    InputNumberComponent,
    BakehouseContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
