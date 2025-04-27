import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleWorkshopSingleviewPageRoutingModule } from './vehicle-workshop-singleview-routing.module';

import { VehicleWorkshopSingleviewPage } from './vehicle-workshop-singleview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleWorkshopSingleviewPageRoutingModule
  ],
  declarations: [VehicleWorkshopSingleviewPage]
})
export class VehicleWorkshopSingleviewPageModule {}
