import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManuPage } from './manu';

@NgModule({
  declarations: [
    ManuPage,
  ],
  imports: [
    IonicPageModule.forChild(ManuPage),
  ],
  exports: [
    ManuPage
  ]
})
export class ManuPageModule {}
