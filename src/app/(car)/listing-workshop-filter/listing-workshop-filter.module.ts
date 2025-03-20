import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingWorkshopFilterPageRoutingModule } from './listing-workshop-filter-routing.module';

import { ListingWorkshopFilterPage } from './listing-workshop-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingWorkshopFilterPageRoutingModule
  ],
  declarations: [ListingWorkshopFilterPage]
})
export class ListingWorkshopFilterPageModule {}
