import { Jsonp } from '@angular/http';
import { ProductDescriptionModel } from './productDescriptions.model';
import { ProductdescriptionsProvider } from '../../providers/productdescriptions/productdescriptions';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDescriptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-description',
  templateUrl: 'product-description.html',
})
export class ProductDescriptionPage {
  productdata: ProductDescriptionModel = new ProductDescriptionModel();
  constructor(public navCtrl: NavController, public navParams: NavParams,public productdescriptionsProvider:ProductdescriptionsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDescriptionPage');
    this.getdataProductDescriptions();
  }

  getdataProductDescriptions(){
    this.productdescriptionsProvider.getData().then(res =>{
      this.productdata = res;
      console.log("productDescription........"+JSON.stringify(this.productdata));
    })
  }

}
