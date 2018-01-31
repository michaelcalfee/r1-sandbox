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
    return {cart};
  }
}
