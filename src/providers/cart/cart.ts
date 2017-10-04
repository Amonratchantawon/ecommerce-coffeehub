import { CartModel } from '../../pages/cart/cart.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CartProvider {

  constructor(public http: Http) {
    console.log('Hello CartProvider Provider');
  }

  getCart() {
    return JSON.parse(window.localStorage.getItem('cart'));
  };

  addCart(prod) {
    let carts = JSON.parse(window.localStorage.getItem('cart')) ? JSON.parse(window.localStorage.getItem('cart')) : { items: [] };
    carts.items = carts.items ? carts.items : [];
    if (carts.items && carts.items.length > 0) {
      let status = false;
      let index = 0;
      carts.items.forEach(function (product, i) {
        if (product.product._id === prod.product._id) {
          if (product.price === prod.price) {
            index = i;
            status = true;
          }
        }
      });

      if (status) {
        carts.items[index].qty++;
        carts.items[index].amount = carts.items[index].qty * carts.items[index].price;
        window.localStorage.setItem('cart', JSON.stringify(carts));
        return this.getCart();
      } else {
        prod = prod ? prod : {};
        prod.amount = prod.price * prod.qty;
        carts.items.push(prod);
        window.localStorage.setItem('cart', JSON.stringify(carts));
        return this.getCart();
      }

    } else {
      prod = prod ? prod : {};
      prod.amount = prod.price * prod.qty;
      carts.items.push(prod);
      window.localStorage.setItem('cart', JSON.stringify(carts));
      return this.getCart();
    }
  };

  removeCart(index) {
    let carts = JSON.parse(window.localStorage.getItem('cart'));
    carts.items.splice(index, 1);
    window.localStorage.setItem('cart', JSON.stringify(carts));
    return this.getCart();
  }

  updateCart(index,qty){
    let carts = JSON.parse(window.localStorage.getItem('cart'));
    carts.items[index].qty = qty;
    carts.items[index].amount = carts.items[index].qty * carts.items[index].price;
    window.localStorage.setItem('cart', JSON.stringify(carts));
    return this.getCart();
  }

}
