import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantWorkshoopSingleViewPageRoutingModule } from './plant-workshoop-single-view-routing.module';

import { PlantWorkshoopSingleViewPage } from './plant-workshoop-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantWorkshoopSingleViewPageRoutingModule
  ],
  declarations: [PlantWorkshoopSingleViewPage]
})
export class PlantWorkshoopSingleViewPageModule {}
