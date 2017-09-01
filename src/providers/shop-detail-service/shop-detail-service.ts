import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LogServiceProvider } from '../../providers/log-service/log-service';
/*
  Generated class for the ShopDetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShopDetailServiceProvider {

  constructor(public http: Http,public log:LogServiceProvider) {
    this.log.info('Hello ShopDetailServiceProvider Provider');
  }

}
