import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { Coupon } from './coupon';
import { CartService } from './cart.service';

@Component({
  selector: 'coupons',
  providers: [],
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})

export class CouponsComponent implements OnInit {
  title = 'Coupon Clipping';
  description = 'This is technical exploration of coupon clipping animation and not intended to represent the entire interaction design nor act as a reference implementation.';
  coupons: Coupon[];

  constructor(
    private router: Router,
    private cartService: CartService) { }

  getCoupons(): void {
    this.cartService.getCoupons().then(coupons => this.coupons = coupons);
  }

  ngOnInit(): void {
    this.getCoupons();
  }

}
