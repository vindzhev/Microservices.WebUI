import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ins-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products$: Observable<Product[]>;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }
}
