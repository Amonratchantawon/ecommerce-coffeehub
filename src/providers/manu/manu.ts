import { CategoryModel } from '../../pages/category/category.model';
import { MenuModel } from '../../pages/manu/manu.model';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ManuProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ManuProvider {
    public cartItems: Array<any> = new Array();
    apiUrl: string = 'https://coffeehubserver.herokuapp.com/';
    headers = new Headers({
        'Content-Type': 'application/json'
    });

    optionsURL = new RequestOptions({
        headers: this.headers
    });

    constructor(public http: Http) {
        console.log('Hello ManuProvider Provider');
    }
    // getData(): Promise<MenuModel> {
    //   return this.http.get('./assets/example_data/menu.json')
    //     .toPromise()
    //     .then(response => response.json() as MenuModel)
    //     .catch(this.handleError);
    // }

    // private handleError(error: any): Promise<any> { 
    //   return Promise.reject(error.message || error);

    // }

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

    // postDataCategory(cateId): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         this.http.post(this.apiUrl + 'api/product/'+ cateId, this.optionsURL).map(res => {
    //             return res.json();
    //         }).subscribe(data => {
    //             resolve(data);
    //         }, (error) => {
    //             reject(error);
    //         });
    //     })
    // }


}
