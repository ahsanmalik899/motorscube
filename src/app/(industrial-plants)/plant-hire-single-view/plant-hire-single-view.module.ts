import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantHireSingleViewPageRoutingModule } from './plant-hire-single-view-routing.module';

import { PlantHireSingleViewPage } from './plant-hire-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantHireSingleViewPageRoutingModule
  ],
  declarations: [PlantHireSingleViewPage]
})
export class PlantHireSingleViewPageModule {}
