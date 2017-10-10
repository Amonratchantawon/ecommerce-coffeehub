import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { LogServiceProvider } from '../../providers/log-service/log-service';
/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProfileServiceProvider {

  apiUrl: string = 'https://coffeehubserver.herokuapp.com/';
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  optionsURL = new RequestOptions({
    headers: this.headers
  });


  constructor(public http: Http,public log:LogServiceProvider) {
    this.log.info('Hello ProfileServiceProvider Provider');
  }

  updateUser(userData): Promise<any> {
    console.log(userData);
    return this.http.put(this.apiUrl + 'api/users',userData)
    .toPromise()
    .then(response => response.json() as any)
    .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  this.log.errorService('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
