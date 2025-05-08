import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantBusenessPageRoutingModule } from './plant-buseness-routing.module';

import { PlantBusenessPage } from './plant-buseness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantBusenessPageRoutingModule
  ],
  declarations: [PlantBusenessPage]
})
export class PlantBusenessPageModule {}
