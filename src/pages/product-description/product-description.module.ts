import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDescriptionPage } from './product-description';

@NgModule({
  declarations: [
    ProductDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductDescriptionPage),
  ],
  exports: [
    ProductDescriptionPage
  ]
})
export class ProductDescriptionPageModule {}
