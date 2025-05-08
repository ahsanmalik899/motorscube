import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantHireFilterPageRoutingModule } from './plant-hire-filter-routing.module';

import { PlantHireFilterPage } from './plant-hire-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantHireFilterPageRoutingModule
  ],
  declarations: [PlantHireFilterPage]
})
export class PlantHireFilterPageModule {}
