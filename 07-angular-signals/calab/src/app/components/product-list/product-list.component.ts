import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
  cart: Product[] = [];
  products: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
