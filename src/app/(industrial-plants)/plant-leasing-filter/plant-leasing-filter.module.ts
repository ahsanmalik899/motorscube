import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantLeasingFilterPageRoutingModule } from './plant-leasing-filter-routing.module';

import { PlantLeasingFilterPage } from './plant-leasing-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantLeasingFilterPageRoutingModule
  ],
  declarations: [PlantLeasingFilterPage]
})
export class PlantLeasingFilterPageModule {}
