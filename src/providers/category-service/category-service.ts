import { CategoryModel } from '../../pages/category/category.model';
import { Injectable } from '@angular/core';
import { Http ,Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CategoryServiceProvider {

  apiUrl: string = 'https://coffeehubserver.herokuapp.com/';
  headers = new Headers({
      'Content-Type': 'application/json'
  });

  optionsURL = new RequestOptions({
      headers: this.headers
  });

  constructor(public http: Http) {
  }


   getData(): Promise<Array<CategoryModel>> {
    return new Promise((resolve, reject) => {
        this.http.get(this.apiUrl + 'api/categories').map(res => {
            return res.json();
        }).subscribe(data => {
            resolve(data);
        }, (error) => {
            reject(error);
        });
      })
    }
     
}
