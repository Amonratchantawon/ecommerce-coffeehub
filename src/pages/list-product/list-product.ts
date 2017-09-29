import { CartPage } from '../cart/cart';
import { CategoryModel } from '../category/category.model';
import { ProductDescriptionPage } from '../product-description/product-description';
import { Component } from '@angular/core';
import { Alert, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListProductModel } from '../list-product/list-product.model';
import { ListProductServiceProvider } from '../list-product/list-product.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ListProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html',
})
export class ListProductPage {
  listProductData: Array<ListProductModel> = new Array<ListProductModel>();
  cateData: CategoryModel = new CategoryModel();



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public listProductService: ListProductServiceProvider,
    public log: LogServiceProvider,
    public alertCtrl: AlertController
  ) {
    this.cateData = this.navParams.data.itemdata;
    console.log("DTA : " + JSON.stringify(this.cateData._id));

  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ListProductPage');
    this.getdatatest();
    // this.getListProductData();

    // this.getCate();

  }
  // getCate(){
  //   this.cateData = this.navParams.data;
  //   console.log("this.navParams.get('itemdata');>>>>>>>>>>>>>>"+JSON.stringify(this.cateData));
  //   console.log("Cate ID :"+this.cateData);
  // }


  // getListProductData() {
  //   this.listProductService
  //     .getListProfile()
  //     .then((data) => {
  //       this.listProductData = data;
  //       // console.log("this.listProductData : "+JSON.stringify(this.listProductData));
  //     }, (err) => {
  //       this.log.error(err);
  //     });
  // }
  getdatatest() {
    this.listProductService.postDataCategory(this.cateData._id).then((data) => {
      console.log("DATA from server : " + data);
      this.listProductData = data;
    })
  }


  onClickproductdescriptions(event) {
    // alert("AAAAAAAAAAA"+JSON.stringify(event));
    this.navCtrl.push(ProductDescriptionPage, { 'itemClicked': event });
  }

  alertSelect(event) {

    let alert = this.alertCtrl.create();
    alert.setTitle(event.name);


    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log(data);
        // if (data == undefined ) {
        //  console.log('pls select');
        // }
        let item = {
          product:event,
          selectprice:data
        }
        this.navCtrl.push(CartPage,item);


      }
    });
    if (event.price.length === 1) {
      let item = {
        product:event,
        selectprice:event.price[0].netprice
      }
      this.navCtrl.push(CartPage,item);
    } else {
      for (var i = 0; i < event.price.length; i++) {
        console.log('false');

        alert.addInput({
          type: 'radio',
          label: event.price[i].type,
          value: event.price[i].price,
          checked: i === 0 
        });
      }
      alert.present();
    }


  }
}
