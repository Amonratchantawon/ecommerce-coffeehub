import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ListProductModel } from '../list-product/list-product.model';
import { LogServiceProvider } from '../../providers/log-service/log-service';

/*
  Generated class for the ListProductServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ListProductServiceProvider {


  apiUrl: string = 'http://localhost:3000/';
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  optionsURL = new RequestOptions({
    headers: this.headers
  });

  constructor(public http: Http, public log: LogServiceProvider) {
    this.log.info('Hello ListProductServiceProvider Provider');
  }

  // getListProfile(): Promise<Array<ListProductModel>> {
  //   return this.http.get('./assets/example_data/producttest.json')
  //     .toPromise()
  //     .then(response => response.json() as Array<ListProductModel>)
  //     .catch(this.handleError);
  // }

  // private handleError(error: any): Promise<any> {
  //   // this.log.errorService('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);

  // }

  // getListProfile(): Promise<Array<ListProductModel>> {
  //   return new Promise((resolve, reject) => {
  //     this.http.get(this.apiUrl + 'api/products').map(res => {
  //       return res.json();
  //     }).subscribe(data => {
  //       resolve(data);
  //     }, (error) => {
  //       reject(error);
  //     });
  //   })
  // }
  postDataCategory(cateId): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.get(this.apiUrl + 'api/products/cate/'+ cateId ).map(res => {
            return res.json();
        }).subscribe(data => {
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
}


}
