import { ProductDescriptionModel } from '../product-description/productDescriptions.model';
import { Injectable } from "@angular/core";
import { Http,Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { HomeModel } from "./home.model";
import { LogServiceProvider } from '../../providers/log-service/log-service';



@Injectable()
export class HomeService {
  constructor(public http: Http, public log: LogServiceProvider) {}


  apiUrl: string = 'http://localhost:3000/';
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  optionsURL = new RequestOptions({
    headers: this.headers
  });
  getDatahome(): Promise<HomeModel> {
    return this.http.get('./assets/example_data/home.json')
     .toPromise()
     .then(response => response.json() as HomeModel)
     .catch(this.handleError);
  }
  // getDataDescription(): Promise<ProductDescriptionModel> {
  //   return this.http.get('./assets/example_data/productdescriptions.json')
  //     .toPromise()
  //     .then(response => response.json() as ProductDescriptionModel)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
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
