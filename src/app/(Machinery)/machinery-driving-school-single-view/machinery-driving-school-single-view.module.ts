import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryDrivingSchoolSingleViewPageRoutingModule } from './machinery-driving-school-single-view-routing.module';

import { MachineryDrivingSchoolSingleViewPage } from './machinery-driving-school-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryDrivingSchoolSingleViewPageRoutingModule
  ],
  declarations: [MachineryDrivingSchoolSingleViewPage]
})
export class MachineryDrivingSchoolSingleViewPageModule {}
