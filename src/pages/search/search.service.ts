import { ProductSearchModel } from './search.model';
import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LogServiceProvider } from '../../providers/log-service/log-service';

/*
  Generated class for the SearchServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SearchServiceProvider {

  apiUrl: string = 'https://coffeehubserver.herokuapp.com/';
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  optionsURL = new RequestOptions({
    headers: this.headers
  });

  constructor(public http: Http,public log:LogServiceProvider) {
    this.log.info('Hello SearchServiceProvider Provider');
  }

  // getData(): Promise<ProductSearchModel> {
  //   return this.http.get('./assets/example_data/search.json')
  //     .toPromise()
  //     .then(response => response.json() as ProductSearchModel)
  //     .catch(this.handleError);
  // }

  // private handleError(error: any): Promise<any> {
  //   this.log.errorService('An error occurred', error); 
  //   return Promise.reject(error.message || error);
  // }


  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.get(this.apiUrl + 'api/products' ).map(res => {
            return res.json();
        }).subscribe(data => {
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
}

}
