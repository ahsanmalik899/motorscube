import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCarAdsPageRoutingModule } from './my-car-ads-routing.module';

import { MyCarAdsPage } from './my-car-ads.page';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCarAdsPageRoutingModule,
    IonicModule,
  ],

})
export class MyCarAdsPageModule {}
