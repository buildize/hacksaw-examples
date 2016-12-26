import { store, bind } from 'hacksaw';
import ProductStore from './product-store';
import User from '../models/user';
import Store from './store'

class UserStore extends Store {
  static create(name) {
    this.put(new User({ id: Math.random(), name }));
  }

  static get current() {
    return this.context('current').first
  }

  static setCurrent(id) {
    this.context('current').clean().put({ id });
  }
}

export default bind(ProductStore, '_cartItems')(store(UserStore));
