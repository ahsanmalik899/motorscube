import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehicleDrivingSchoolPageRoutingModule } from './update-vehicle-driving-school-routing.module';

import { UpdateVehicleDrivingSchoolPage } from './update-vehicle-driving-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVehicleDrivingSchoolPageRoutingModule
  ],
 
})
export class UpdateVehicleDrivingSchoolPageModule {}
