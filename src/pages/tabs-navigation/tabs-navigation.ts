import { CartProvider } from '../../providers/cart/cart';
import { CartItemListModel } from '../../components/cart-list/cart-list.interface';
import { Events } from 'ionic-angular';
import { OrderProductDetailPage } from '../order-product-detail/order-product-detail';
import { Component } from '@angular/core';
import { HomePage } from "../home/home";
import { SearchPage } from "../search/search";
import { CartPage } from "../cart/cart";
import { ProfilePage } from "../profile/profile";
import { FavoritePage } from "../favorite/favorite";

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  tab5Root: any;
  private badgeNum: number;
  private items: Array<any> = [];

  constructor(public events: Events, public cartProvider: CartProvider) {

    this.tab1Root = HomePage;
    this.tab2Root = SearchPage;
    // this.tab3Root = CartPage;
    this.tab3Root = CartPage;
    this.tab4Root = FavoritePage;
    this.tab5Root = ProfilePage;

  }

  getcount() {
    this.badgeNum = 0;
    let cart = this.cartProvider.getCart();
    if (cart && cart.items && cart.items.length > 0) {
      cart.items.forEach(element => {
        this.badgeNum += element.qty;
      });
    } else {
      this.badgeNum = null;
    }
    return this.badgeNum;
  }

}
