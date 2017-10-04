import { ListProductModel } from '../list-product/list-product.model';
import { ProductDescriptionPage } from '../product-description/product-description';
// import { ProductDescriptionModel } from '../product-description/productDescriptions.model';
import { ManuPage } from '../manu/manu';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';


import { HomeService } from './home.service';
import { HomeModel } from "./home.model";
import { ProductDetailPage } from "../product-detail/product-detail";
import { ShopDetailPage } from "../shop-detail/shop-detail";
import { ListProductPage } from '../list-product/list-product';
import { ListShopPage } from '../list-shop/list-shop';
import { LogServiceProvider } from '../../providers/log-service/log-service';
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  //images: Array<string> = [];
  home: Array<ListProductModel> = new Array<ListProductModel>();
  datahome: HomeModel = new HomeModel();
  // dataDescriptions :ProductDescriptionModel = new ProductDescriptionModel();
  loading: any;
  constructor(public navCtrl: NavController,
    public homeService: HomeService,
    public loadingCtrl: LoadingController,
    public log: LogServiceProvider

  ) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomePage');
    this.loading.present();
    this.homeService
      .getData()
      .then(data => {
        this.home = data;
        this.log.info(data);
        this.loading.dismiss();
      });

    this.homeService.getDatahome().then((data) => {
      this.datahome = data;
      console.log(this.datahome);
    })
  }



  // getdataDescriptions(){
  //   this.homeService.getDataDescription().then( res =>{
  //     this.dataDescriptions = res;
  //     console.log("getdataDescriptions...."+JSON.stringify(this.dataDescriptions));
  //   })
  // }

  selectedItem(e) {
    console.log("page-home :: >>" + JSON.stringify(e));
    this.navCtrl.push(ProductDescriptionPage, { itemClicked: e });
  }

  selectedShop(e) {
    this.navCtrl.push(ShopDetailPage, e);
  }

  xxxx(e) {
    alert(e);
  }
  openPageProductList() {
    this.navCtrl.push(ManuPage);
  }
  openPageShopList() {
    this.navCtrl.push(ListShopPage);
  }
}
