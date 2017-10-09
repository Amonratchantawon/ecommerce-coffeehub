import { ToastProvider } from '../../providers/toast/toast';
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
    public loginServiceProvider:LoginServiceProvider,
    public toastProvider: ToastProvider) {

    this.login = new FormGroup({
      username: new FormControl('amonratCha', Validators.required),
      password: new FormControl('P@ssw0rd1234', Validators.required)

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

      window.localStorage.setItem('user',JSON.stringify(data));
      
      if(data.roles[0] == 'user'){
        this.navCtrl.push(TabsNavigationPage);
      }else{
        alert("ไม่มีสิทธ์เข้าใช้งาน");
        // this.toastProvider.create("ไม่มีสิทธ์เข้าใช้งาน");
      }
    },(err)=>{
      let error = JSON.parse(err._body);
      alert(error.message);
    })
    
  }

  goToSignup() {
    this.navCtrl.push(RegisterPage);
  }

}
