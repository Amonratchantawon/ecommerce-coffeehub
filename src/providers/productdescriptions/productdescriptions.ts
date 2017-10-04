import { ProductDescriptionModel } from '../../pages/product-description/productDescriptions.model';
import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductdescriptionsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductdescriptionsProvider {

  apiUrl: string = 'https://coffeehubserver.herokuapp.com/';
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  optionsURL = new RequestOptions({
    headers: this.headers
  });

  constructor(public http: Http) {
    console.log('Hello ProductdescriptionsProvider Provider');
  }
 

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.get(this.apiUrl + 'api/products/').map(res => {
            return res.json();
        }).subscribe(data => {
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
}

}
