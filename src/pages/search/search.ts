import { CartPage } from '../cart/cart';
import { CartProvider } from '../../providers/cart/cart';
import { RequestOptions, Headers } from '@angular/http';
import { ListProductModel } from '../list-product/list-product.model';
import { ProductSearchModel } from './search.model';
import { ProductDescriptionPage } from '../product-description/product-description';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SearchServiceProvider } from './search.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchData: Array<ListProductModel> = new Array<ListProductModel>();


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public searchServiceProvider: SearchServiceProvider,
    public log: LogServiceProvider,
    public cartProvider: CartProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad SearchPage');
    this.getSearchData();
  }

  getSearchData() {
    this.searchServiceProvider.getData().then(res => {
      this.searchData = res;
      console.log(this.searchData);
    });
  }

  // searchInput(e) {
  //   if (e && e == 'reload') {
  //     this.getSearchData();
  //   } else {
  //     this.searchData.items = e;
  //   }
  // }

  clickToproductdes(event) {
    this.navCtrl.push(ProductDescriptionPage, { 'itemClicked': event });
  }

  alertSelect(event) {
    console.log(event);
    let alert = this.alertCtrl.create();
    alert.setTitle(event.name);


    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log(data);


        let item = {
          product: event,
          selectprice: data
        };

        let cookingProduct = {
          product: event,
          price: data,
          qty: 1
        };

        this.cartProvider.addCart(cookingProduct);

      }
    });
    if (event.price.length === 1) {

      let cookingProduct = {
        product: event,
        price: event.price[0].netprice,
        qty: 1
      };
      this.cartProvider.addCart(cookingProduct);

      // this.navCtrl.push(CartPage);

    } else {
      for (var i = 0; i < event.price.length; i++) {
        console.log('false');

        alert.addInput({
          type: 'radio',
          label: event.price[i].type,
          value: event.price[i].price,
          checked: i === 0
        });
      }
      alert.present();
    }
  }
  
  onClickproductdescriptions(event) {
    this.navCtrl.push(ProductDescriptionPage, { 'itemClicked': event });
  }


}
