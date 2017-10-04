import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthorizeModel } from "./login.model";
/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  apiUrl: string = 'https://coffeehubserver.herokuapp.com/';
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  optionsURL = new RequestOptions({
    headers: this.headers
  });

  constructor(public http: Http) {
    console.log('Hello LoginServiceProvider Provider');
  }

  // onAuthorization(): Promise<AuthorizeModel> { // signup
  //   return this.http.get('./assets/example_data/profile.json')
  //     .toPromise()
  //     .then(response => {
  //       let data = response.json() as AuthorizeModel;
  //       window.localStorage.setItem('e7e_ecommerce_buy_user', JSON.stringify(data));
  //       return data;
  //     })
  //     .catch(this.handleError);
  // }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

  onAuthorization(data): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl + 'api/auth/signin/',data).map(res => {
            return res.json();
        }).subscribe(data => {
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
}

}
