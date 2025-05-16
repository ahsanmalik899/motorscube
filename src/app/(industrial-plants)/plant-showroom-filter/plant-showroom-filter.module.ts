import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantShowroomFilterPageRoutingModule } from './plant-showroom-filter-routing.module';

import { PlantShowroomFilterPage } from './plant-showroom-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantShowroomFilterPageRoutingModule
  ],
  declarations: [PlantShowroomFilterPage]
})
export class PlantShowroomFilterPageModule {}
