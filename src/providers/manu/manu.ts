import { MenuModel } from '../../pages/manu/manu.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ManuProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ManuProvider {

  constructor(public http: Http) {
    console.log('Hello ManuProvider Provider');
  }
  getData(): Promise<MenuModel> {
    return this.http.get('../../assets/example_data/menu.json')
      .toPromise()
      .then(response => response.json() as MenuModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> { 
    return Promise.reject(error.message || error);

  }


}
