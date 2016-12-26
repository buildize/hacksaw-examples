import Model from './model';
import UserStore from '../stores/user-store';
import ProductStore from '../stores/product-store';

export default class User extends Model {
  _cartItems = this._cartItems || [];

  addToCart(productId) {
    if (!this._cartItems.includes(productId)) this._cartItems.push(productId);
    this.update();
  }

  removeFromCart(productId) {
    const index = this._cartItems.findIndex(i => i === productId);
    this._cartItems.splice(index, 1);
    this.update();
  }

  get cartItems() {
    return this._cartItems.map(key => ProductStore.find(key));
  }

  update() {
    UserStore.put(this);
  }
}
