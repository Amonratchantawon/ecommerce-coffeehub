import { ListProductModel, PriceModel } from '../list-product/list-product.model';
import { ManuPage } from '../manu/manu';
import { ShopDetailPage } from '../shop-detail/shop-detail';

import { HomeModel } from '../home/home.model';
import { HomeService } from '../home/home.service';
import { Jsonp } from '@angular/http';
import { Price, ProductDescriptionModel } from './productDescriptions.model';
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

  // Type:any;

  Type :PriceModel = new PriceModel();
  homedata: HomeModel = new HomeModel();
  productdata: ProductDescriptionModel = new ProductDescriptionModel();

  itemclick:ListProductModel = new  ListProductModel();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public productdescriptionsProvider:ProductdescriptionsProvider,
    public homeService: HomeService
  ) {
    this.itemclick =  this.navParams.data.itemClicked;
    this.Type = this.itemclick.price[0];
    console.log("item to description Name >>>>>>>>"+ JSON.stringify(this.itemclick));
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDescriptionPage');
    
    // this.getdataProductDescriptions();
    this.getDataScollX();
  }
  

  onChane(){
    console.log("data type", this.Type);
  }

  // getdataProductDescriptions(){
    
  //   this.productdescriptionsProvider.getData().then(res =>{
  //     this.productdata = res;
      
  //   this.selectSize =  this.productdata.productdescriptions.price[0];
  //     console.log("productDescription........"+JSON.stringify(this.productdata));
  //   })
  // }
  getDataScollX(){
    this.homeService
    .getData()
    .then(data => {
      this.homedata = data;
      console.log("homedata"+this.homedata);
    });
  }

  onclickToShop(){
    this.navCtrl.push(ShopDetailPage);
  }


  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  openPageProductList(){
    this.navCtrl.push(ManuPage);
  }

  openPageProduc(){
    this.navCtrl.push(ProductDescriptionPage);
  }

  orderProduct(){
    alert("add to cart sucess");
  }

}
