import { LoginPage } from '../login/login';
import { ForgotpasswordProvider } from '../../providers/forgotpassword/forgotpassword';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  forgot: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public forgotpasswordProvider: ForgotpasswordProvider
  ) {

    this.forgot = new FormGroup({
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  forgotPassword() {
    console.log(this.forgot.value.password);
    let newpassword = { "password": this.forgot.value.password }

    if (this.forgot.value.password !== this.forgot.value.confirm_password) {
      alert("Passwords do not match !")
    } else {
      // this.forgotpasswordProvider.forgotPassword(newpassword).then((data)=>{
      //   console.log(data);
      //   this.navCtrl.push(LoginPage);
      // }).catch((err)=>{
      //   console.log(err);
      // })
      
    }
  }

}
