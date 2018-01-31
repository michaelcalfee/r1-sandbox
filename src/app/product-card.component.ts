import { Component, Input, OnInit } from '@angular/core';

import { CartService } from './cart.service';
import { Product } from './product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: [ './product-card.component.css' ]
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  inCart: boolean;
  isBusy: boolean;
  isSaving: boolean;
  quantity: number;
  displayQuantity: number;
  timer: number;
  status: string;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.updateStatus();
  }

  updateStatus(): void {
    this.quantity = this.displayQuantity = this.product.quantity;
    this.inCart = this.product.quantity > 0;
    this.isBusy = this.isSaving = false;
    this.status = '...request complete';
  }

  update(quantity: number): void {
    this.isBusy = true;
    this.quantity = quantity;
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.status = 'Queueing (quantity: ' + this.quantity + ')';
    }
    this.timer = window.setTimeout(() => {
      this.save(this.quantity);
    }, 300);
  }

  save(quantity: number): void {
    this.isSaving = true;
    this.product.quantity = quantity;
    this.status = 'Sending request to API (quantity: ' + quantity + ')...';
    this.cartService.updateSlowly(this.product)
      .then(() => this.updateStatus());
  }

}
