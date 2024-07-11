import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakehouseComponent } from './bakehouse/bakehouse.component';
import { BakehouseAboutComponent } from './bakehouse-about/bakehouse-about.component';
import { BakehouseProductsComponent } from './bakehouse-products/bakehouse-products.component';
import { BakehouseContactComponent } from './bakehouse-contact/bakehouse-contact.component';

const routes: Routes = [
  //Aqui los routes 
  {
    path:'',
    redirectTo: 'bakehouse',
    pathMatch: 'full'
  },
  {
    path: 'bakehouse', 
    component: BakehouseComponent
  },
  {
    path: 'about',
    component: BakehouseAboutComponent
  },
  {
    path: 'products',
    component: BakehouseProductsComponent
  },
  {
    path: 'contact',
    component: BakehouseContactComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
