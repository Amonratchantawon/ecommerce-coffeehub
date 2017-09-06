import { ShopDetailPage } from '../shop-detail/shop-detail';

import { HomeModel } from '../home/home.model';
import { HomeService } from '../home/home.service';
import { Jsonp } from '@angular/http';
import { ProductDescriptionModel } from './productDescriptions.model';
import { ProductdescriptionsProvider } from '../../providers/productdescriptions/productdescriptions';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

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

  @ViewChild(Slides) slides: Slides;

  size :any;
  degee:any;
  sugar:any;

  homedata: HomeModel = new HomeModel();
  productdata: ProductDescriptionModel = new ProductDescriptionModel();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public productdescriptionsProvider:ProductdescriptionsProvider,
    public homeService: HomeService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDescriptionPage');
    this.getdataProductDescriptions();
    this.getDataScollX();
  }

  getdataProductDescriptions(){
    this.productdescriptionsProvider.getData().then(res =>{
      this.productdata = res;
      console.log("productDescription........"+JSON.stringify(this.productdata));
    })
  }
  getDataScollX(){
    this.homeService
    .getData()
    .then(data => {
      this.homedata = data;
      console.log("homedata"+this.homedata);
    });
  }

  orderProduct(){
    console.log("Size : "+this.size+"\nsuger : "+this.sugar+"\ndegee : "+this.degee);
  }

  onclickToShop(){
    this.navCtrl.push(ShopDetailPage);
  }


  goToSlide() {
    this.slides.slideTo(2, 500);
  }



}
