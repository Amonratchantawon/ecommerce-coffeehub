import { CartProvider } from '../../providers/cart/cart';
import { ManuProvider } from '../../providers/manu/manu';
import { OrderProductDetailPage } from '../order-product-detail/order-product-detail';
import { CartPage } from '../cart/cart';
import { CategoryModel } from '../category/category.model';
import { ProductDescriptionPage } from '../product-description/product-description';
import { Component } from '@angular/core';
import { Alert, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListProductModel } from '../list-product/list-product.model';
import { ListProductServiceProvider } from '../list-product/list-product.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { AlertController } from 'ionic-angular';
import { CartItemListModel } from "../../components/cart-list/cart-list.interface";



@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html',
})
export class ListProductPage {
  listProductData: Array<ListProductModel> = new Array<ListProductModel>();
  cateData: CategoryModel = new CategoryModel();

  addCartlist = {} as CartItemListModel;

  cartItem: Array<any> = new Array;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public listProductService: ListProductServiceProvider,
    public log: LogServiceProvider,
    public alertCtrl: AlertController,
    public manuPVD: ManuProvider,
    public cartProvider: CartProvider
  ) {

    this.cateData = this.navParams.data.itemdata;
    console.log("DTA : " + JSON.stringify(this.cateData._id));

  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ListProductPage');
    this.getdatatest();

  }

  getdatatest() {
    this.listProductService.postDataCategory(this.cateData._id).then((data) => {
      console.log("DATA from server : " + data);
      this.listProductData = data;
    })
  }


  onClickproductdescriptions(event) {
    this.navCtrl.push(ProductDescriptionPage, { 'itemClicked': event });
  }

  alertSelect(event) {
    console.log("POOOOOO : " + JSON.stringify(event));
    let alert = this.alertCtrl.create();
    alert.setTitle(event.name);


    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {

        console.log(data.type);
        console.log(data.price);

        let cookingProduct = {
          product: event,
          price: data.price,
          type: data.type,
          qty: 1

        };

        console.log(cookingProduct);

        this.cartProvider.addCart(cookingProduct);
        this.navCtrl.push(CartPage);


      }
    });
    if (event.price.length === 1) {
      
      let cookingProduct = {
        product: event,
        price: event.price[0].netprice,
        type: event.price[0].type,
        qty: 1
      };
      this.cartProvider.addCart(cookingProduct);

      this.navCtrl.push(CartPage);

    } else {
      for (var i = 0; i < event.price.length; i++) {
        console.log('false');

        alert.addInput({
          type: 'radio',
          label: event.price[i].type,
          value: event.price[i],
          checked: i === 0
        });
      }
      alert.present();
    }


  }
}
