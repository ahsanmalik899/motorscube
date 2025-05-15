import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantSchoolListingPageRoutingModule } from './plant-school-listing-routing.module';

import { PlantSchoolListingPage } from './plant-school-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantSchoolListingPageRoutingModule
  ],
  declarations: [PlantSchoolListingPage]
})
export class PlantSchoolListingPageModule {}
