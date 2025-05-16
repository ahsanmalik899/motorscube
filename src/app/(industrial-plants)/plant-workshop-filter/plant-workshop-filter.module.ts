import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantWorkshopFilterPageRoutingModule } from './plant-workshop-filter-routing.module';

import { PlantWorkshopFilterPage } from './plant-workshop-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantWorkshopFilterPageRoutingModule
  ],
  declarations: [PlantWorkshopFilterPage]
})
export class PlantWorkshopFilterPageModule {}
