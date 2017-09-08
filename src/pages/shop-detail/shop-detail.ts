import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShopModel } from '../shop-detail/shop-detail.model';
import { ShopDetailServiceProvider } from '../shop-detail/shop-detail.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { CallNumber } from "@ionic-native/call-number";

/**
 * Generated class for the ShopDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html',
})
export class ShopDetailPage {
  shopDetailData: ShopModel = new ShopModel();
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public shopDetailService: ShopDetailServiceProvider, 
    public log: LogServiceProvider,
    private callNumber:CallNumber
  ) {

  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ShopDetailPage');
    this.getShopDetailData() ;
  }
  getShopDetailData() {
    this.shopDetailService
      .getShopDetail()
      .then((data) => {
        this.shopDetailData = data;
        this.log.info(data);
      }, (err) => {
        this.log.error(err);
      });
  }

  clickToCallShop(){
    alert("calling......");
    this.callNumber.callNumber("0930241530",true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }
}