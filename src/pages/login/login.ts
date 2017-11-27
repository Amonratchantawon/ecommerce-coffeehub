import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { ToastProvider } from '../../providers/toast/toast';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { RegisterPage } from "../register/register";
import { credentialModel } from "./login.model";
import { LoginServiceProvider } from "./login.service";

import { HomePage } from "../home/home";
import { AuthProvider } from "../../providers/auth/auth";

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
    public loginServiceProvider: LoginServiceProvider,
    public toastProvider: ToastProvider,
    public alertCrttl: AlertController,
    public auth: AuthProvider
  ) {

    this.login = new FormGroup({
      username: new FormControl('amonratcha', Validators.required),
      password: new FormControl('P@ssw0rd1234', Validators.required)

    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(data) {
    let userdata = { "username": this.login.value.username, "password": this.login.value.password };
    this.auth.login(userdata).subscribe(res =>{
      this.navCtrl.push(TabsNavigationPage);
      // if (res.succes === true) {
      //   this.navCtrl.setRoot(HomePage);
      // } else {
      //   userdata.password = '';
      //   let alert = this.alertCrttl.create({
      //     title:'login Failed',
          
      //     buttons:['OK']
      //   })
      //   alert.present();
      // }
    })
  }

  // doLogin(data) {
  //   this.credential = this.login.value;
  //   let userdata = { "username": this.login.value.username, "password": this.login.value.password };
  //   // alert(JSON.stringify(userdata));

  //   this.loginServiceProvider.onAuthorization(userdata).then((data)=>{

  //     window.localStorage.setItem('user',JSON.stringify(data));

  //     if(data.roles[0] == 'user'){
  //       this.navCtrl.push(TabsNavigationPage);
  //     }else{
  //       alert("ไม่มีสิทธ์เข้าใช้งาน");
  //       // this.toastProvider.create("ไม่มีสิทธ์เข้าใช้งาน");
  //     }
  //   },(err)=>{
  //     let error = JSON.parse(err._body);
  //     alert(error.message);
  //   })

  // }

  goToSignup() {
    this.navCtrl.push(RegisterPage);
  }

  forgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);

  }

}
