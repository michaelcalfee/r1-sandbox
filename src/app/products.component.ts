import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { Product } from './product';
import { CartService } from './cart.service';

@Component({
  selector: 'products',
  providers: [],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  title = 'Products';
  products: Product[];

  constructor(
    private router: Router,
    private cartService: CartService) { }

  getProducts(): void {
    this.cartService.getCart().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.cartService.create(name)
      .then(product => {
        this.products.push(product);
      });
  }

  delete(product: Product): void {
    this.cartService
        .delete(product.id)
        .then(() => {
          this.products = this.products.filter(h => h !== product);
        });
  }
}
