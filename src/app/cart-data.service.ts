import { InMemoryDbService } from 'angular-in-memory-web-api';
export class CartDataService implements InMemoryDbService {
  createDb() {
    const cart = [
      { id: 0, name: 'Product 1', quantity: 0 },
      { id: 1, name: 'Product 2', quantity: 0 },
      { id: 2, name: 'Product 3', quantity: 0 },
      { id: 3, name: 'Product 4', quantity: 0 },
      { id: 4, name: 'Product 5', quantity: 0 }
    ];
    const coupons = [
      { id: 0, name: 'Coupon 1', productName: 'Product 1', description: 'Any ONE (1) package of Product 1', expirationDate: '03/03/18', url: 'http://url.to.coupon', isClipped: false, isOffer: false},
      { id: 1, name: 'Coupon 2', productName: 'Product 2', description: 'Save when you buy any 2 participating packages', expirationDate: '03/03/18', url: 'http://url.to.coupon', isClipped: false, isOffer: true},
    ]
    return {cart, coupons};
  }
}