import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeWorkshopFilterPageRoutingModule } from './bike-workshop-filter-routing.module';

import { BikeWorkshopFilterPage } from './bike-workshop-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeWorkshopFilterPageRoutingModule
  ],
  declarations: [BikeWorkshopFilterPage]
})
export class BikeWorkshopFilterPageModule {}
