import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehicleHirePostPageRoutingModule } from './update-vehicle-hire-post-routing.module';

import { UpdateVehicleHirePostPage } from './update-vehicle-hire-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVehicleHirePostPageRoutingModule
  ],
  declarations: [UpdateVehicleHirePostPage]
})
export class UpdateVehicleHirePostPageModule {}
