import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantSchoolFilterPageRoutingModule } from './plant-school-filter-routing.module';

import { PlantSchoolFilterPage } from './plant-school-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantSchoolFilterPageRoutingModule
  ],
  declarations: [PlantSchoolFilterPage]
})
export class PlantSchoolFilterPageModule {}
