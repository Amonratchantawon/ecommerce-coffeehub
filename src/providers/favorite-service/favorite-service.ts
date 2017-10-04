import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LogServiceProvider } from '../../providers/log-service/log-service';

/*
  Generated class for the FavoriteServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FavoriteServiceProvider {

  constructor(public http: Http, public log: LogServiceProvider) {
    this.log.info('Hello FavoriteServiceProvider Provider');
  }

  getFavorite() {
    return JSON.parse(window.localStorage.getItem('favorite'));
  };

  addFavorite(data) {

    let favorite = window.localStorage.getItem('favorite') ? JSON.parse(window.localStorage.getItem('favorite')) : { productfavorite: [] };
    favorite.productfavorite = favorite.productfavorite ? favorite.productfavorite : [];
    if (favorite.productfavorite && favorite.productfavorite.length > 0) {
      
      let chkFavorite = favorite.productfavorite.filter(function (obj) { return obj._id == data._id; });
      if (chkFavorite.length > 0) {
        return this.getFavorite();

      } else {

        favorite.productfavorite.push(data);
        window.localStorage.setItem('favorite', JSON.stringify(favorite));
        return this.getFavorite();
      }
    } else {
      favorite.productfavorite.push(data);
      window.localStorage.setItem('favorite', JSON.stringify(favorite));
      return this.getFavorite();
    }
  }

  removeFavorite(index){
    let favorite = JSON.parse(window.localStorage.getItem('favorite'));
    favorite.productfavorite.splice(index,1);
    window.localStorage.setItem('favorite', JSON.stringify(favorite));
    return this.getFavorite();
  }



}
