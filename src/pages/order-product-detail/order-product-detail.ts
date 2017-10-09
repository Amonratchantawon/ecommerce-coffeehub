import { CartItemListModel } from '../../components/cart-list/cart-list.interface';
import { Component, EventEmitter, Output } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderProductDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-product-detail',
  templateUrl: 'order-product-detail.html',
})
export class OrderProductDetailPage {

  private badgeNum: number = 0;
  private items: Array<any> = [];
  // itemsInCart: Array<any> = t
  @Output() callBack :EventEmitter<any> = new EventEmitter<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events
  ) {
  


  }

  ionViewDidLoad() {

  }

  onPayment(cart) {
    alert('connect to palyment ...');
  }

  inic() {

    // for (let i = 0; i < this.addCartlistRef$.length; i++) {
    //   var element = this.addCartlistRef$[i];

    // }
  }

  onClickQty(event, item) {
    // alert(JSON.stringify(item))

    item.qty = event;
    console.log("QTY :" + item.qty);
    // this.callBack.emit(item.qty);
    this.events.publish('badgeNum', (this.badgeNum + item.qty) -1 );
  }

}
