import Store from './store';
import { store } from 'hacksaw';

class ProductStore extends Store {
  create(name, price) {
    this.put({ id: Math.random(), name, price });
  }
}

export default store(ProductStore);
