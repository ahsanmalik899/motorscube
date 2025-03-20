import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeShowroomFilterPageRoutingModule } from './bike-showroom-filter-routing.module';

import { BikeShowroomFilterPage } from './bike-showroom-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeShowroomFilterPageRoutingModule
  ],
  declarations: [BikeShowroomFilterPage]
})
export class BikeShowroomFilterPageModule {}
