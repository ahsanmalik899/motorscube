import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryDrivingSchoolFilterPageRoutingModule } from './machinery-driving-school-filter-routing.module';

import { MachineryDrivingSchoolFilterPage } from './machinery-driving-school-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryDrivingSchoolFilterPageRoutingModule
  ],
  declarations: [MachineryDrivingSchoolFilterPage]
})
export class MachineryDrivingSchoolFilterPageModule {}
