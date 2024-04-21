import { Component, OnInit } from '@angular/core';
import { Product } from '../model/products';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent implements OnInit {

  product!: Product;
  
  ngOnInit(): void {
    this.product = new Product();
  }

}
