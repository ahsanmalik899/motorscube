import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleInsuranceSingleviewPageRoutingModule } from './vehicle-insurance-singleview-routing.module';

import { VehicleInsuranceSingleviewPage } from './vehicle-insurance-singleview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleInsuranceSingleviewPageRoutingModule
  ],
  declarations: [VehicleInsuranceSingleviewPage]
})
export class VehicleInsuranceSingleviewPageModule {}
