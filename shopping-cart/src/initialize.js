import UserStore from './stores/user-store';
import ProductStore from './stores/product-store';
import Product from './models/product';
import User from './models/user';

UserStore.put(new User({ id: 1, name: 'Kameko', _cartItems: [1, 4, 5] }));
UserStore.put(new User({ id: 2, name: 'Rasha' }));
UserStore.put(new User({ id: 3, name: 'Zé' }));

UserStore.context('current').put({ id: 1 });

ProductStore.put(new Product({ id: 1, name: '1984', price: 2 }));
ProductStore.put(new Product({ id: 2, name: 'King Solomon\'s Ring', price: 5 }));
ProductStore.put(new Product({ id: 3, name: 'Puslu Kıtalar Atlası', price: 4 }));
ProductStore.put(new Product({ id: 4, name: 'Apology of Socrates', price: 2 }));
ProductStore.put(new Product({ id: 5, name: 'Sapiens: A Brief History of Humankind', price: 6 }));

for(let i = 0 ; i < 1000 ;i++)
ProductStore.create(Math.random(), Math.random());
