import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleLeasingSingleviewPageRoutingModule } from './vehicle-leasing-singleview-routing.module';

import { VehicleLeasingSingleviewPage } from './vehicle-leasing-singleview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleLeasingSingleviewPageRoutingModule
  ],
  declarations: [VehicleLeasingSingleviewPage]
})
export class VehicleLeasingSingleviewPageModule {}
