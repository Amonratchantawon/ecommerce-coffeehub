import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';
import { OrderStatusPage } from '../pages/order-status/order-status';
import { PaymentPage } from '../pages/payment/payment';
import { FavoriteServiceProvider } from '../providers/favorite-service/favorite-service';
import { OrderProductDetailPage } from '../pages/order-product-detail/order-product-detail';
import { CategoryPage } from '../pages/category/category';
import { ProductDescriptionPage } from '../pages/product-description/product-description';
import { ManuPage } from '../pages/manu/manu';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';

import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { HomePage } from "../pages/home/home";


import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';
import { ColorRadio } from '../components/color-radio/color-radio';
import { CounterInput } from '../components/counter-input/counter-input';
// import { Rating } from '../components/rating/rating';

// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';
// import { GoogleMap } from '../components/google-map/google-map';

// import { FacebookLoginService } from '../pages/facebook-login/facebook-login.service';
// import { GoogleLoginService } from '../pages/google-login/google-login.service';
// import { TwitterLoginService } from '../pages/twitter-login/twitter-login.service';
// import { GoogleMapsService } from '../pages/maps/maps.service';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { AdMobFree } from '@ionic-native/admob-free';
import { AppRate } from '@ionic-native/app-rate';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { EmailComposer } from '@ionic-native/email-composer';
import { Camera } from '@ionic-native/camera';
import { CallNumber } from "@ionic-native/call-number";

// Functionalities
// import { FunctionalitiesPage } from '../pages/functionalities/functionalities';
// import { MapsPage } from '../pages/maps/maps';
// import { FacebookLoginPage } from '../pages/facebook-login/facebook-login';
// import { GoogleLoginPage } from '../pages/google-login/google-login';
// import { TwitterLoginPage } from '../pages/twitter-login/twitter-login';
// import { ContactCardPage } from '../pages/contact-card/contact-card';
// import { VideoPlaylistPage } from '../pages/video-playlist/video-playlist';

import { VideoPlayerModule } from '../components/video-player/video-player.module';
import { ValidatorsModule } from '../components/validators/validators.module';
import { TopbarComponent } from '../components/topbar/topbar';
import { ListItemsComponent } from '../components/list-items/list-items';
import { LanguageService } from '../providers/language/language.service';
import { TabsNavigationPage } from "../pages/tabs-navigation/tabs-navigation";
import { SearchPage } from "../pages/search/search";
import { CartPage } from "../pages/cart/cart";
import { ProfilePage } from "../pages/profile/profile";
import { FavoritePage } from "../pages/favorite/favorite";
import { ListScollXComponent } from '../components/list-scoll-x/list-scoll-x';
import { ListGridComponent } from '../components/list-grid/list-grid';
import { AdsHeaderBarComponent } from '../components/ads-header-bar/ads-header-bar';
import { HomeService } from "../pages/home/home.service";
import { ProductDetailPage } from "../pages/product-detail/product-detail";
import { ShopDetailPage } from "../pages/shop-detail/shop-detail";
import { TestComponent } from '../components/test/test';
import { CartService } from "../pages/cart/cart.service";
import { SearchServiceProvider } from '../pages/search/search.service';
import { ListProductServiceProvider } from '../pages/list-product/list-product.service';
import { ListProductPage } from '../pages/list-product/list-product';
import { ListShopsComponent } from '../components/list-shops/list-shops';
import { ListShopServiceProvider } from '../pages/list-shop/list-shop.service';
import { ListShopPage } from '../pages/list-shop/list-shop';
import { ProductDetailServiceProvider } from '../pages/product-detail/product-detail.service';
import { ShopDetailServiceProvider } from '../pages/shop-detail/shop-detail.service';
import { CartListComponent } from '../components/cart-list/cart-list';
import { LogServiceProvider } from '../providers/log-service/log-service';
import { SearchbarComponent } from '../components/searchbar/searchbar';
import { AuthorizeProvider } from "../providers/authorize/authorize";
import { LoginPage } from "../pages/login/login";
import { LoginServiceProvider } from "../pages/login/login.service";
import { RegisterPage } from "../pages/register/register";
import { RegisterServiceProvider } from "../pages/register/register.service";
import { ManuProvider } from '../providers/manu/manu';
import { ProductdescriptionsProvider } from '../providers/productdescriptions/productdescriptions';
import { CameraProvider } from '../providers/camera/camera';
import { UndefinedProvider } from '../providers/undefined/undefined';
import { AlertProvider } from '../providers/alert/alert';
import { ToastProvider } from '../providers/toast/toast';
import { CategoryServiceProvider } from '../providers/category-service/category-service';
import { ListItemTestComponent } from '../components/list-item-test/list-item-test';
import { CartProvider } from '../providers/cart/cart';

import { OneSignal } from '@ionic-native/onesignal';
import { ForgotpasswordProvider } from '../providers/forgotpassword/forgotpassword';
import { AuthProvider } from "../providers/auth/auth";

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    WalkthroughPage,
    TabsNavigationPage,
    HomePage,
    SearchPage,
    CartPage,
    ProfilePage,
    FavoritePage,
    ProductDetailPage,
    ShopDetailPage,
    LoginPage,
    RegisterPage,

    PreloadImage,
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
    // Rating,
    // GoogleMap,
    ListScollXComponent,
    ListGridComponent,
    AdsHeaderBarComponent,
    TestComponent,
    TopbarComponent,
    ListItemsComponent,
    ListProductPage,
    ListShopPage,
    ListShopsComponent,
    CartListComponent,
    SearchbarComponent,
    ManuPage,
    ProductDescriptionPage,
    CategoryPage,
    ListItemTestComponent,
    OrderProductDetailPage,
    PaymentPage,
    OrderStatusPage,
    ForgotPasswordPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      iconMode: "ios"

    }),
    Ionic2RatingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    VideoPlayerModule,
    ValidatorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WalkthroughPage,
    TabsNavigationPage,
    HomePage,
    SearchPage,
    CartPage,
    ProfilePage,
    FavoritePage,
    ProductDetailPage,
    ShopDetailPage,
    ListProductPage,
    ListShopPage,
    LoginPage,
    RegisterPage,
    ManuPage,
    ProductDescriptionPage,
    CategoryPage,
    OrderProductDetailPage,
    PaymentPage,
    OrderStatusPage,
    ForgotPasswordPage

  ],
  providers: [
    HomeService,
    CartService,
    // GoogleMapsService,
    LanguageService,
    SplashScreen,
    StatusBar,
    SocialSharing,
    NativeStorage,
    InAppBrowser,
    Facebook,
    GooglePlus,
    Keyboard,
    Geolocation,
    TwitterConnect,
    AdMobFree,
    AppRate,
    ImagePicker,
    Crop,
    EmailComposer,
    Camera,
    CallNumber,
    SearchServiceProvider,
    ProfileServiceProvider,
    ListProductServiceProvider,
    ListShopServiceProvider,
    ProductDetailServiceProvider,
    ShopDetailServiceProvider,
    LogServiceProvider,
    AuthorizeProvider,
    LoginServiceProvider,
    RegisterServiceProvider,
    ManuProvider,
    ProductdescriptionsProvider,
    CameraProvider,
    UndefinedProvider,
    AlertProvider,
    ToastProvider,
    CategoryServiceProvider,
    CartProvider,
    OneSignal,
    FavoriteServiceProvider,
    ProfileServiceProvider,
    ForgotpasswordProvider,
    AuthProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
