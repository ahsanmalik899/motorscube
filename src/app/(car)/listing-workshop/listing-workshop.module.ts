import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingWorkshopPageRoutingModule } from './listing-workshop-routing.module';

import { ListingWorkshopPage } from './listing-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingWorkshopPageRoutingModule
  ],
  declarations: [ListingWorkshopPage]
})
export class ListingWorkshopPageModule {}
