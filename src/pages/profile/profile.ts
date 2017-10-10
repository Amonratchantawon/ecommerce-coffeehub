import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import { WalkthroughPage } from '../walkthrough/walkthrough';
import { Component } from '@angular/core';
import { IonicPage, App, NavController, ActionSheetController, Platform, LoadingController, NavParams } from 'ionic-angular';
import { ProfileModel } from '../profile/profile.model';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { AuthorizeProvider } from "../../providers/authorize/authorize";
import { CameraProvider } from "../../providers/camera/camera";
import { AlertProvider } from "../../providers/alert/alert";
import { ToastProvider } from "../../providers/toast/toast";

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileData: ProfileModel = new ProfileModel();
  chosenPicture = "https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/21314397_1410273562383607_9014405429036635307_n.jpg?oh=00bac870110c20fe9fa3af26eb47fb63&oe=5A22E023";
  enableNotifications: any;
  languages = ['English', 'Portuguese', 'French'];
  isenabled: boolean = true;
  Edit = "create";

  users: ProfileModel = new ProfileModel();

  // userData :any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public profileService: ProfileServiceProvider,
    public log: LogServiceProvider,
    public authorizeProvider: AuthorizeProvider,
    public actionsheetCtrl: ActionSheetController,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    public cameraProvider: CameraProvider,
    public alertService: AlertProvider,
    public toastProvider: ToastProvider,
    private app: App
  ) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ProfilePage');
    // this.getProfileData();
    this.readData()
  }

  readData() {
    this.users = JSON.parse(window.localStorage.getItem('user'));
    // alert(JSON.stringify(this.users));
    console.log(this.users.lastName);
    console.log(this.users.firstName);
    console.log(this.users.email);
  }



  // ionViewWillEnter() {
  //   this.checkUser();
  // }

  // checkUser() {
  //   this.profileData = this.authorizeProvider.isAuthorization();
  // }

  // logout() {
  //   this.authorizeProvider.unAuthorization();
  //   this.checkUser();
  // }
  // getProfileData() {
  //   this.profileService
  //     .getProfile()
  //     .then((data) => {
  //       this.profileData = data;
  //     }, (err) => {
  //       this.log.error(err);
  //     });
  // }

  clicktogglr(users) {
    if (this.Edit == "create") {
      this.Edit = "checkbox-outline"
      if (this.isenabled == true) {
        this.isenabled = false;
      }
    } else if (this.Edit == "checkbox-outline") {
      this.Edit = "create"
      this.profileService.updateUser(this.users).then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      })
      if (this.isenabled == false) {
        this.isenabled = true;
      }
    }



  }


  logout() {
    this.alertService.presentAlertWithCallback('Are you sure?',
      'This will log you out of this application.').then((yes) => {
        if (yes) {
          this.toastProvider.create('Logged out of the application');
          setTimeout(() => {
            this.app.getRootNav().setRoot(WalkthroughPage);
          }, 1000);
        }
      });
  }

  toggleNotifications() {
    if (this.enableNotifications) {
      this.toastProvider.create('Notifications enabled.');
    } else {
      this.toastProvider.create('Notifications disabled.');
    }
  }

  changePicture() {
    const actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }

  takePicture() {
    const loading = this.loadingCtrl.create();
    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  getPicture() {
    const loading = this.loadingCtrl.create();
    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }
}
