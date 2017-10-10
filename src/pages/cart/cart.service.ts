import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CartModel } from "./cart.model";
import { LogServiceProvider } from '../../providers/log-service/log-service';


@Injectable()
export class CartService {
  constructor(public http: Http, public log: LogServiceProvider) {

  }

  apiUrl: string = 'https://coffeehubserver.herokuapp.com/';
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  optionsURL = new RequestOptions({
    headers: this.headers
  });


  postDataProduct(order): Promise<any> {
 
    order.user = JSON.parse(window.localStorage.getItem('user'));
    return this.http.post(this.apiUrl + 'api/orders',order)
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
