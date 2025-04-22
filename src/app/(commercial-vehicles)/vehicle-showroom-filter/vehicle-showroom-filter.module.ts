import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleShowroomFilterPageRoutingModule } from './vehicle-showroom-filter-routing.module';

import { VehicleShowroomFilterPage } from './vehicle-showroom-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleShowroomFilterPageRoutingModule
  ],
  declarations: [VehicleShowroomFilterPage]
})
export class VehicleShowroomFilterPageModule {}
