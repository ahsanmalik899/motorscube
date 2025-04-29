import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinerySaleListingPageRoutingModule } from './machinery-sale-listing-routing.module';

import { MachinerySaleListingPage } from './machinery-sale-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachinerySaleListingPageRoutingModule
  ],
  declarations: [MachinerySaleListingPage]
})
export class MachinerySaleListingPageModule {}
