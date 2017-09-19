import { ListProductPage } from '../list-product/list-product';
import { CategoryModel } from './category.model';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  dataCategory: Array<CategoryModel> = new Array<CategoryModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoryServiceProvider: CategoryServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
    this.getCategory();
  }

  getCategory() {
    this.categoryServiceProvider.getData().then(res=>{
      this.dataCategory = res;
      console.log(this.dataCategory);
    })
  }
  

}
