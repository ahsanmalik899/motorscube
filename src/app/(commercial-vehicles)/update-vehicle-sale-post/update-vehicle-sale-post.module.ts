import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehicleSalePostPageRoutingModule } from './update-vehicle-sale-post-routing.module';

import { UpdateVehicleSalePostPage } from './update-vehicle-sale-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVehicleSalePostPageRoutingModule
  ],

})
export class UpdateVehicleSalePostPageModule {}
