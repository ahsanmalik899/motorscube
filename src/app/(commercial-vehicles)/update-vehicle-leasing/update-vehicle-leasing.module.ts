import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehicleLeasingPageRoutingModule } from './update-vehicle-leasing-routing.module';

import { UpdateVehicleLeasingPage } from './update-vehicle-leasing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVehicleLeasingPageRoutingModule
  ],

})
export class UpdateVehicleLeasingPageModule {}
