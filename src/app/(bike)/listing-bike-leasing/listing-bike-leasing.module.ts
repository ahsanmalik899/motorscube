import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingBikeLeasingPageRoutingModule } from './listing-bike-leasing-routing.module';

import { ListingBikeLeasingPage } from './listing-bike-leasing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingBikeLeasingPageRoutingModule
  ],
  declarations: [ListingBikeLeasingPage]
})
export class ListingBikeLeasingPageModule {}
