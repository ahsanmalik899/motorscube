import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostVehicleSaleAdPageRoutingModule } from './post-vehicle-sale-ad-routing.module';

import { PostVehicleSaleAdPage } from './post-vehicle-sale-ad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostVehicleSaleAdPageRoutingModule
  ],
 
})
export class PostVehicleSaleAdPageModule {}
