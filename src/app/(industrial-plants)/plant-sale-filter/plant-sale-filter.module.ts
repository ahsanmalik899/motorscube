import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantSaleFilterPageRoutingModule } from './plant-sale-filter-routing.module';

import { PlantSaleFilterPage } from './plant-sale-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantSaleFilterPageRoutingModule
  ],
  declarations: [PlantSaleFilterPage]
})
export class PlantSaleFilterPageModule {}
