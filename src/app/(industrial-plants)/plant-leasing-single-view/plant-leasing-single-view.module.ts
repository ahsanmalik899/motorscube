import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantLeasingSingleViewPageRoutingModule } from './plant-leasing-single-view-routing.module';

import { PlantLeasingSingleViewPage } from './plant-leasing-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantLeasingSingleViewPageRoutingModule
  ],
  declarations: [PlantLeasingSingleViewPage]
})
export class PlantLeasingSingleViewPageModule {}
