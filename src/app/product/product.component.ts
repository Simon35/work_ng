import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { Product } from '../model/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  @Input()  product!: Product;
  @Output() incrementEvent = new EventEmitter<Product>()

  constructor() {}

  ngOnInit(): void {
    
  }

  sendNotif() {
    this.incrementEvent.emit(this.product)
  }
}
