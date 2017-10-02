import { CartItemListModel } from '../../components/cart-list/cart-list.interface';
import { Component, EventEmitter, Output } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

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


  addCartlistRef$: FirebaseListObservable<CartItemListModel[]>;
  private badgeNum: number = 0;
  private items: Array<any> = [];
  // itemsInCart: Array<any> = t
  @Output() callBack :EventEmitter<any> = new EventEmitter<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private angularFireDatabase: AngularFireDatabase,
    public events: Events
  ) {
   this.getBadge();


  }

  getBadge(){
    this.addCartlistRef$ = this.angularFireDatabase.list('list-product');
    this.addCartlistRef$.forEach((element) => {
      this.items = element;
      for (let i = 0; i < this.items.length; i++) {
        this.badgeNum += this.items[i].qty;
      }
      this.events.publish('badgeNum', this.badgeNum);
      console.log(this.badgeNum);
    });
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

  calculete() {

    // this.carts.totalamount = 0;
    // for (var i = 0; i < this.carts.items.length; i++) {
    //   this.carts.items[i].amount = 0;
    //   this.carts.items[i].amount = this.carts.items[i].qty * this.carts.items[i].product.price;
    //   this.carts.totalamount += this.carts.items[i].amount;
    // }
  }



}
