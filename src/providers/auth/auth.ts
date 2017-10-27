
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class AuthProvider {
  baseUrl:string = 'https://coffeehubserver.herokuapp.com/'
  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  createAuthorizationHeader(headers:Headers){
    headers.append('Authorization', window.localStorage.getItem('token'));
  }

  private(){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.baseUrl+'api/users/me',{
      headers: headers
    }).map(res=>{
      res.json()
    });
  }
  login(data){
    return this.http.post(this.baseUrl+"api/auth/signin", data).map(this.extractData);
  }
  isLogged(){
    if (window.localStorage.getItem('token')) {
      return true;
    }else{
      return false;
    }
  }
  logout(){
    window.localStorage.removeItem('token');
    return  this.http.get(this.baseUrl+"api/auth/signout").map(this.extractData);;
  }
  private extractData(res:Response){
    let body = res.json();   
      window.localStorage.setItem('token', body.loginToken);
    return body || {};
  }
}
