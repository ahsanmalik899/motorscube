import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleDrivingSchoolFilterPageRoutingModule } from './vehicle-driving-school-filter-routing.module';

import { VehicleDrivingSchoolFilterPage } from './vehicle-driving-school-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleDrivingSchoolFilterPageRoutingModule
  ],
  declarations: [VehicleDrivingSchoolFilterPage]
})
export class VehicleDrivingSchoolFilterPageModule {}
