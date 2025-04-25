import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostVehicleDrivingSchoolPageRoutingModule } from './post-vehicle-driving-school-routing.module';

import { PostVehicleDrivingSchoolPage } from './post-vehicle-driving-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostVehicleDrivingSchoolPageRoutingModule
  ],
  
})
export class PostVehicleDrivingSchoolPageModule {}
