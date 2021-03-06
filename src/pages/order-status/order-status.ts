import { OrdersModel } from '../cart/oder.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { OneSignal } from '@ionic-native/onesignal';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public events:Events,
    private oneSignal: OneSignal
  ) {
  this.orderStatus = this.navParams.data
  console.log(this.orderStatus);
  }

  ionViewDidLoad() {
    // this.onetest();
  }

  submitOrder(){
    this.oneSignal.startInit('488cf223-1990-454c-b12c-bc25ef275986', 'coffee-hub');
    
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    
    this.oneSignal.handleNotificationReceived().subscribe(() => {
     // do something when notification is received
    });
    
    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });
    
    this.oneSignal.endInit();
  }

  // submitOrder(){
  //   let user = "0000000";
  //   this.events.publish('user:created', user, Date.now());
  // }




}
