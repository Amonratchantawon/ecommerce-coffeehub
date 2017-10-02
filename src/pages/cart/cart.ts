import { CartProvider } from '../../providers/cart/cart';
import { ManuProvider } from '../../providers/manu/manu';
import { CartItemListModel } from '../../components/cart-list/cart-list.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CartService } from "./cart.service";
import { CartModel } from "./cart.model";
import { ProductDetailPage } from "../product-detail/product-detail";
import { FormGroup, FormControl } from '@angular/forms';
import { counterRangeValidator } from '../../components/counter-input/counter-input';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  // loading: any;
  cart: CartModel = new CartModel();
  totalamount: number;
  // counterForm: any;
  // dataSeclect: any;



  // addCartlist = {} as CartItemListModel;
  // addCartlistRef$: FirebaseListObservable<CartItemListModel[]>
  // public carts;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService,
    public loadingCtrl: LoadingController,
    public log: LogServiceProvider,
    private angularFireDatabase: AngularFireDatabase,
    public manuPVD: ManuProvider,
    public cartProvider: CartProvider
  ) {
    // this.carts = manuPVD.cartItems;
    // this.addCartlistRef$ = this.angularFireDatabase.list('list-product');

    // this.dataSeclect = this.navParams.data;

    // this.counterForm = new FormGroup({
    //   counter: new FormControl()
    // });
  }

  // ionViewDidLoad() {

  //   this.cart = this.cartProvider.getCart();
  //   this.total = 0;

  //   if (this.cart && this.cart.items && this.cart.items.length > 0) {
  //     this.cart.items.forEach(function(itm){
  //       this.total += itm.amount;
  //     });
  //   }
  // let aa = window.localStorage.getItem('cart')
  // alert("cart : " + aa);

  // this.loading.present();
  // this.cartService
  //   .getData()
  //   .then(data => {
  //     this.log.info(data);
  //     this.cart = data;
  //     // this.loading.dismiss();
  //   });
  // }

  ionViewWillEnter() {
    this.cart = this.cartProvider.getCart();
    let totalamount = 0;
    if (this.cart && this.cart.items && this.cart.items.length > 0) {
      this.cart.items.forEach(function (itm) {
        totalamount += itm.amount;
      });
    }

    this.totalamount = totalamount;
  }

  // gotoProductDetail(item) {
  //   this.navCtrl.push(ProductDetailPage, item)
  // }

  onPayment(cart) {
    // console.log(cart);
  }
}
