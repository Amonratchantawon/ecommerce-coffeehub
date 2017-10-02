import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderProductDetailPage } from './order-product-detail';

@NgModule({
  declarations: [
    OrderProductDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderProductDetailPage),
  ],
  exports: [
    OrderProductDetailPage
  ]
})
export class OrderProductDetailPageModule {}
