import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryShowroomListingPageRoutingModule } from './machinery-showroom-listing-routing.module';

import { MachineryShowroomListingPage } from './machinery-showroom-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryShowroomListingPageRoutingModule
  ],
  declarations: [MachineryShowroomListingPage]
})
export class MachineryShowroomListingPageModule {}
