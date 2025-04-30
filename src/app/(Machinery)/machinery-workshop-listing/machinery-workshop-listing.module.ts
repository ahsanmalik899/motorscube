import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryWorkshopListingPageRoutingModule } from './machinery-workshop-listing-routing.module';

import { MachineryWorkshopListingPage } from './machinery-workshop-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryWorkshopListingPageRoutingModule
  ],
  declarations: [MachineryWorkshopListingPage]
})
export class MachineryWorkshopListingPageModule {}
