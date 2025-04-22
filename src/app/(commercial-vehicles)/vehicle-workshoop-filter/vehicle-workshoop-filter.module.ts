import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleWorkshoopFilterPageRoutingModule } from './vehicle-workshoop-filter-routing.module';

import { VehicleWorkshoopFilterPage } from './vehicle-workshoop-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleWorkshoopFilterPageRoutingModule
  ],
  declarations: [VehicleWorkshoopFilterPage]
})
export class VehicleWorkshoopFilterPageModule {}
