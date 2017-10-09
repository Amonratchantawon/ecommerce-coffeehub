import { OrderStatusPage } from '../order-status/order-status';
import { OrdersModel } from './oder.model';
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



@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  // loading: any;
  cart: CartModel = new CartModel();
  totalamount: number;
  items = [];
  order: OrdersModel = new OrdersModel();
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
    public manuPVD: ManuProvider,
    public cartProvider: CartProvider
  ) {

  }

  ionViewWillEnter() {

    this.calculate();
  }

  calculate() {
    this.cart = this.cartProvider.getCart();
    let totalamount = 0;
    if (this.cart && this.cart.items && this.cart.items.length > 0) {
      this.cart.items.forEach(function (itm) {
        totalamount += itm.amount;
      });
    }

    this.totalamount = totalamount;
  }

  deleteItem(i) {
    this.cartProvider.removeCart(i);
    this.calculate();
  }

  updateCounter(event) {
    let qty = event.qty;
    let index = event.itemindex;
    this.cartProvider.updateCart(index, qty);
    this.calculate();
  }

  onPayment(cart) {
    let addData = JSON.parse(window.localStorage.getItem('cart'));
    // alert(addData);
    console.log(addData.items);

    let users = JSON.parse(window.localStorage.getItem('user'));

    this.order.orderStatus = 'waiting';
    this.order.date = new Date();
    this.order.cupcoin = 20;
    this.order.user = users._id;
    
    for (var i = 0; i < addData.items.length; i++) {
      this.order.items = this.order.items ? this.order.items : []

      this.order.items.push({
        product: addData.items[i].product._id,
        qty: addData.items[i].qty,
        selectedPrice: {
          type: addData.items[i].type,
          netprice: addData.items[i].price
        }
      });
    }
    console.log(JSON.stringify(this.order));
    

    this.cartService.postDataProduct(this.order).then((data)=>{
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    })
    this.navCtrl.push(OrderStatusPage,this.order)
  }
}
