import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryDrivingSchoolListingPageRoutingModule } from './machinery-driving-school-listing-routing.module';

import { MachineryDrivingSchoolListingPage } from './machinery-driving-school-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryDrivingSchoolListingPageRoutingModule
  ],
  declarations: [MachineryDrivingSchoolListingPage]
})
export class MachineryDrivingSchoolListingPageModule {}
