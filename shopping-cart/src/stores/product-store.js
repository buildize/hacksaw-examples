import Store from './store';
import { store } from 'hacksaw';
import Product from '../models/product';

var id = 5;

class ProductStore extends Store {
  static create(name, price) {
    this.put(new Product({ id: ++id, name, price }));
  }
}

export default store(ProductStore);
