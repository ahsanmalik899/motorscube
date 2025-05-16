import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantInsuranceFilterPageRoutingModule } from './plant-insurance-filter-routing.module';

import { PlantInsuranceFilterPage } from './plant-insurance-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantInsuranceFilterPageRoutingModule
  ],
  declarations: [PlantInsuranceFilterPage]
})
export class PlantInsuranceFilterPageModule {}
