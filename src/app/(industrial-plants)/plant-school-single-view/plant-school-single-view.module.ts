import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantSchoolSingleViewPageRoutingModule } from './plant-school-single-view-routing.module';

import { PlantSchoolSingleViewPage } from './plant-school-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantSchoolSingleViewPageRoutingModule
  ],
  declarations: [PlantSchoolSingleViewPage]
})
export class PlantSchoolSingleViewPageModule {}
