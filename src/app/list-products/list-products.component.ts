import { Component, OnInit } from '@angular/core';
import { Product } from '../model/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {

  listProducts: Product[] = [];
  constructor() {}

  ngOnInit(): void {
    this.listProducts = [
      {id:'34', title:'Nantes', quantity:10, price:120, like:0},
      {id:'61', title:'Paris', quantity:19, price:431, like:0},
      {id:'78', title:'Andresy', quantity:0, price:491, like:0},
    ]
    
  }

  incrementLike(p: Product) {
    let i=this.listProducts.indexOf(p);
    this.listProducts[i].like++;
  }
}
