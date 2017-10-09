import { OrdersModel } from '../cart/oder.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderStatusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-status',
  templateUrl: 'order-status.html',
})
export class OrderStatusPage {

  orderStatus: OrdersModel = new OrdersModel();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.orderStatus = this.navParams.data
  console.log(this.orderStatus);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderStatusPage');
  }




}
