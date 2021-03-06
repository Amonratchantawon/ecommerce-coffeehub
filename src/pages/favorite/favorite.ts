import { FavoriteServiceProvider } from '../../providers/favorite-service/favorite-service';
import { ProductDescriptionPage } from '../product-description/product-description';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { FavoriteModel } from '../favorite/favorite.model';

import { LogServiceProvider } from '../../providers/log-service/log-service';
/**
 * Generated class for the FavoritePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  favoriteData: FavoriteModel = new FavoriteModel();

  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = '0';
  constructor(public navCtrl: NavController, public navParams: NavParams, public favoriteService: FavoriteServiceProvider,public log:LogServiceProvider) {
  }

  ionViewWillEnter() {
    this.log.info('ionViewDidLoad FavoritePage');
    // this.getFavoriteData();
     this.getFavoriteData();
  }
  // selectTab(index) {
  //   this.pageSlider.slideTo(index);
  // }

  // changeWillSlide($event) {
  //   this.tabs = $event._snapIndex.toString();
  // }
  // getFavoriteData() {
  //   this.favoriteServic
  //     .getFavorite()
  //     .then((data) => {
  //       this.favoriteData = data;
  //     }, (err) => {
  //      this.log.error(err);
  //     });
  // }

  getFavoriteData(){
    this.favoriteData = this.favoriteService.getFavorite();
    console.log(this.favoriteData);
  }

  remove(index){
    this.favoriteService.removeFavorite(index);
    this.getFavoriteData();    
  }
  


  getToProductDescriptionPage(){
    this.navCtrl.push(ProductDescriptionPage);
  }

}
