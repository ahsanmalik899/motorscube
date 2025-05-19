import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantShowroomSingleViewPageRoutingModule } from './plant-showroom-single-view-routing.module';

import { PlantShowroomSingleViewPage } from './plant-showroom-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantShowroomSingleViewPageRoutingModule
  ],
  declarations: [PlantShowroomSingleViewPage]
})
export class PlantShowroomSingleViewPageModule {}
