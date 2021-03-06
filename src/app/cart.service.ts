import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';
import { Coupon } from './coupon';

@Injectable()
export class CartService {

  private cartUrl = 'api/cart';
  private couponsUrl = 'api/coupons';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCart(): Promise<Product[]> {
    return this.http.get(this.cartUrl)
               .toPromise()
               .then(response => response.json().data as Product[])
               .catch(this.handleError);
  }

  getCoupons(): Promise<Coupon[]> {
    return this.http.get(this.couponsUrl)
               .toPromise()
               .then(response => response.json().data as Coupon[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCartSlowly(): Promise<Product[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getCart()), 500);
    });
  }

  getProduct(id: number): Promise<Product> {
    const url = `${this.cartUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Product)
      .catch(this.handleError);
  }

  update(product: Product): Promise<Product> {
    const url = `${this.cartUrl}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  updateSlowly(product: Product): Promise<Product> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.update(product)), 500);
    });
  }

  clip(coupon: Coupon): Promise<Coupon> {
    const url = `${this.couponsUrl}/${coupon.id}`;
    return this.http
      .put(url, JSON.stringify(coupon), {headers: this.headers})
      .toPromise()
      .then(() => coupon)
      .catch(this.handleError);
  }

  clipSlowly(coupon: Coupon): Promise<Coupon> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.clip(coupon)), 500);
    });
  }

  create(name: string): Promise<Product> {
    return this.http
      .post(this.cartUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Product)
      .catch(this.handleError);
  }

  createSlowly(product: Product): Promise<Product> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.create(name)), 2000);
    });
  }

  delete(id: number): Promise<void> {
    const url = `${this.cartUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
