import { FavoriteServiceProvider } from '../../providers/favorite-service/favorite-service';
import { CartProvider } from '../../providers/cart/cart';
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
  orderScollX: Array<ListProductModel> = new Array<ListProductModel>();
  Type: PriceModel = new PriceModel();
  // homedata: HomeModel = new HomeModel();
  productdata: ProductDescriptionModel = new ProductDescriptionModel();

  itemclick: ListProductModel = new ListProductModel();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public productdescriptionsProvider: ProductdescriptionsProvider,
    public homeService: HomeService,
    public cartProvider: CartProvider,
    public favoriteServiceProvider: FavoriteServiceProvider
  ) {
    this.itemclick = this.navParams.data.itemClicked;
    this.Type = this.itemclick.price[0];
    // console.log(this.itemclick);



  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ProductDescriptionPage');

    // this.getdataProductDescriptions();
    // this.getDataScollX();
    this.getOrderScollX();
  }

  favoriteItem(itemclick) {
    console.log(itemclick);
    // alert(JSON.stringify(itemclick));

    let data = {
      _id: itemclick._id,
      name: itemclick.name,
      image: itemclick.image[0],
      descriptons: itemclick.description,
      price: itemclick.price[0].price,
      normalprice: itemclick.price[0].netprice,
      discount: itemclick.price[0].discount,
      discounttype: itemclick.price[0].type
    };

    console.log(data);

    this.favoriteServiceProvider.addFavorite(data);

  }

  selectedItem(e) {
    console.log(e);
    this.navCtrl.push(ProductDescriptionPage, { itemClicked: e });
  }


  onChane() {
    console.log("data type", this.Type);
  }

  getOrderScollX() {
    this.productdescriptionsProvider.getData().then((res) => {
      this.orderScollX = res;
      // console.log(this.orderScollX);
    })
  }

  // getDataScollX(){
  //   this.homeService
  //   .getData()
  //   .then(data => {
  //     this.homedata = data;
  //     console.log("homedata"+this.homedata);
  //   });
  // }

  onclickToShop() {
    this.navCtrl.push(ShopDetailPage);
  }


  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  openPageProductList() {
    this.navCtrl.push(ManuPage);
  }

  openPageProduc() {
    this.navCtrl.push(ProductDescriptionPage);
  }

  orderProduct() {
    let cookingProduct = {
      product: this.itemclick,
      price: this.Type.netprice,
      qty: 1
    };

    this.cartProvider.addCart(cookingProduct);
  }


}
