import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehicleWorkshopPageRoutingModule } from './update-vehicle-workshop-routing.module';

import { UpdateVehicleWorkshopPage } from './update-vehicle-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVehicleWorkshopPageRoutingModule
  ],

})
export class UpdateVehicleWorkshopPageModule {}
