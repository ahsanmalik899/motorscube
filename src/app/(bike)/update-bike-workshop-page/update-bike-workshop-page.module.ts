import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBikeWorkshopPagePageRoutingModule } from './update-bike-workshop-page-routing.module';

import { UpdateBikeWorkshopPagePage } from './update-bike-workshop-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBikeWorkshopPagePageRoutingModule
  ],
 
})
export class UpdateBikeWorkshopPagePageModule {}
