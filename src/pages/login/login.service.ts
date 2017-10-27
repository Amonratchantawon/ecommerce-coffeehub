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
