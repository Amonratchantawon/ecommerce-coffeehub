import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CartService } from "./cart.service";
import { CartModel } from "./cart.model";
import { ProductDetailPage } from "../product-detail/product-detail";
import { FormGroup, FormControl } from '@angular/forms';
import { counterRangeValidator } from '../../components/counter-input/counter-input';
import { LogServiceProvider } from '../../providers/log-service/log-service';


/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  loading: any;
  cart: CartModel = new CartModel();
  counterForm: any;

  dataSeclect: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService,
    public loadingCtrl: LoadingController,
    public log: LogServiceProvider
  ) {
    

    this.dataSeclect = this.navParams.data;
    // this.cart.items = this.cart.items ? this.cart.items : [];
    // this.cart.items.push(this.dataSeclect);
    // console.log("dataSeclect : " + JSON.stringify(this.dataSeclect));

    // this.loading = loadingCtrl.create();
    this.counterForm = new FormGroup({
      counter: new FormControl()
    });
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad CartPage');
    this.loading.present();
    this.cartService
      .getData()
      .then(data => {
        this.log.info(data);
        this.cart = data;
        this.loading.dismiss();
      });
  }

  gotoProductDetail(item) {
    this.navCtrl.push(ProductDetailPage, item)
  }

  onPayment(cart) {
    // console.log(cart);
  }
}
