import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryLeasingListingPageRoutingModule } from './machinery-leasing-listing-routing.module';

import { MachineryLeasingListingPage } from './machinery-leasing-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryLeasingListingPageRoutingModule
  ],
  declarations: [MachineryLeasingListingPage]
})
export class MachineryLeasingListingPageModule {}
