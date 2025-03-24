import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikePostDealershipBusinessPageRoutingModule } from './bike-post-dealership-business-routing.module';

import { BikePostDealershipBusinessPage } from './bike-post-dealership-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikePostDealershipBusinessPageRoutingModule
  ],
  
})
export class BikePostDealershipBusinessPageModule {}
