import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlantPageRoutingModule } from './add-plant-routing.module';

import { AddPlantPage } from './add-plant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddPlantPageRoutingModule
  ],
  declarations: [AddPlantPage]
})
export class AddPlantPageModule {}
