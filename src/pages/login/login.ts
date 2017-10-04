import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { RegisterPage } from "../register/register";
import { credentialModel } from "./login.model";
import { LoginServiceProvider } from "./login.service";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: FormGroup;
  credential: credentialModel = new credentialModel();
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public loginServiceProvider:LoginServiceProvider) {

    this.login = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(data) {
    this.credential = this.login.value;
    let userdata = { "username": this.login.value.username, "password": this.login.value.password };
    // alert(JSON.stringify(userdata));

    this.loginServiceProvider.onAuthorization(userdata).then((data)=>{
      alert(data.roles[0]);
      if(data.roles[0] == 'user'){
        this.navCtrl.push(TabsNavigationPage);
      }else{
        alert("ไม่มีสิทธ์เข้าใช้งาน")
      }
    })
    
  }

  goToSignup() {
    this.navCtrl.push(RegisterPage);
  }

}
