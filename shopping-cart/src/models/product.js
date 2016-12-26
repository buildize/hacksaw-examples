import Model from './model';
import ProductStore from '../stores/product-store';

export default class Product extends Model {
  update() {
    ProductStore.put(this);
  }
}
