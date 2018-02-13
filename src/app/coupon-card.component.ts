import { Component, Input, OnInit } from '@angular/core';

import { CartService } from './cart.service';
import { Coupon } from './coupon';

@Component({
  selector: 'coupon-card',
  templateUrl: './coupon-card.component.html',
  styleUrls: [ './coupon-card.component.css' ]
})
export class CouponCardComponent implements OnInit {

  clipText = "Clip";
  clippedText = "Clipped";

  @Input('coupon') coupon: Coupon;
  isBusy: boolean;
  isClipped: boolean;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.updateStatus(false);
  }

  updateStatus(isClipped: boolean): void {
    this.isBusy = false;
    this.isClipped = isClipped;
  }

  clip(): void {
    this.isBusy = true;
    this.cartService.clipSlowly(this.coupon)
      .then(() => this.updateStatus(true));
  }

}
