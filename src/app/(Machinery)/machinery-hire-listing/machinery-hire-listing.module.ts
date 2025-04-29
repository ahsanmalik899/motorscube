import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryHireListingPageRoutingModule } from './machinery-hire-listing-routing.module';

import { MachineryHireListingPage } from './machinery-hire-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryHireListingPageRoutingModule
  ],
  declarations: [MachineryHireListingPage]
})
export class MachineryHireListingPageModule {}
