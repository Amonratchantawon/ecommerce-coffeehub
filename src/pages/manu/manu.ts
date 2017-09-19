import { CategoryModel } from '../category/category.model';
import { ListProductPage } from '../list-product/list-product';
import { MenuModel } from './manu.model';
import { ManuProvider } from '../../providers/manu/manu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-manu',
  templateUrl: 'manu.html',
})
export class ManuPage {
  menuData :Array<CategoryModel> = new Array<CategoryModel>()
  constructor(public navCtrl: NavController, public navParams: NavParams,public manuProvider:ManuProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManuPage');
    this.getdataManu();
  }
 
  getdataManu(){
    this.manuProvider.getData().then(res=>{
      this.menuData = res;
      // alert(JSON.stringify(res));
      // console.log(res);
    }).catch(err =>{
      // alert(JSON.stringify(err));
    });
  }

  onClicktomenu(item){
    console.log("item menu  : "+ JSON.stringify(item));
    this.navCtrl.push(ListProductPage, {'itemdata' : item});

  }
}
