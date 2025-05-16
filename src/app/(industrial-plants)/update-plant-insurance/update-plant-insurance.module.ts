import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlantInsurancePageRoutingModule } from './update-plant-insurance-routing.module';

import { UpdatePlantInsurancePage } from './update-plant-insurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlantInsurancePageRoutingModule
  ],

})
export class UpdatePlantInsurancePageModule {}
