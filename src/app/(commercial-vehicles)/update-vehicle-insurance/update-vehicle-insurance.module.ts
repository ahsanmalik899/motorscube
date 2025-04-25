import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehicleInsurancePageRoutingModule } from './update-vehicle-insurance-routing.module';

import { UpdateVehicleInsurancePage } from './update-vehicle-insurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVehicleInsurancePageRoutingModule
  ],
  
})
export class UpdateVehicleInsurancePageModule {}
