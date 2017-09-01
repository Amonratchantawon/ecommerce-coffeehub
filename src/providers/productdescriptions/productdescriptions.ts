import { ProductDescriptionModel } from '../../pages/product-description/productDescriptions.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductdescriptionsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductdescriptionsProvider {

  constructor(public http: Http) {
    console.log('Hello ProductdescriptionsProvider Provider');
  }
  getData(): Promise<ProductDescriptionModel> {
    return this.http.get('../../assets/example_data/productdescriptions.json')
      .toPromise()
      .then(response => response.json() as ProductDescriptionModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> { 
    return Promise.reject(error.message || error);

  }

}
