import { RequestOptions,Headers } from '@angular/http';
import { ListProductModel } from '../list-product/list-product.model';
import { ProductSearchModel } from './search.model';
import { ProductDescriptionPage } from '../product-description/product-description';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SearchServiceProvider } from './search.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchData: Array<ListProductModel> = new Array<ListProductModel>();


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public searchServiceProvider: SearchServiceProvider, 
    public log: LogServiceProvider) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad SearchPage');
    this.getSearchData();
  }

  getSearchData() {
   this.searchServiceProvider.getData().then(res=>{
    this.searchData = res;
    console.log(this.searchData);
   });
  }

  // searchInput(e) {
  //   if (e && e == 'reload') {
  //     this.getSearchData();
  //   } else {
  //     this.searchData.items = e;
  //   }
  // }

  clickToproductdes(event){
    this.navCtrl.push(ProductDescriptionPage, { 'itemClicked' :event});
  }


}
