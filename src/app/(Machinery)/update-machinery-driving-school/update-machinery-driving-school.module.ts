import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMachineryDrivingSchoolPageRoutingModule } from './update-machinery-driving-school-routing.module';

import { UpdateMachineryDrivingSchoolPage } from './update-machinery-driving-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMachineryDrivingSchoolPageRoutingModule
  ],
  declarations: [UpdateMachineryDrivingSchoolPage]
})
export class UpdateMachineryDrivingSchoolPageModule {}
