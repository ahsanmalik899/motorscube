import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantInsuranceSingleViewPageRoutingModule } from './plant-insurance-single-view-routing.module';

import { PlantInsuranceSingleViewPage } from './plant-insurance-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantInsuranceSingleViewPageRoutingModule
  ],
  declarations: [PlantInsuranceSingleViewPage]
})
export class PlantInsuranceSingleViewPageModule {}
