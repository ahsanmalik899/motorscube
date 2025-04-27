import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleDrivingSchoolSingleviewPageRoutingModule } from './vehicle-driving-school-singleview-routing.module';

import { VehicleDrivingSchoolSingleviewPage } from './vehicle-driving-school-singleview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleDrivingSchoolSingleviewPageRoutingModule
  ],
  declarations: [VehicleDrivingSchoolSingleviewPage]
})
export class VehicleDrivingSchoolSingleviewPageModule {}
