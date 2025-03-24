import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBikeShowroomPagePageRoutingModule } from './update-bike-showroom-page-routing.module';

import { UpdateBikeShowroomPagePage } from './update-bike-showroom-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBikeShowroomPagePageRoutingModule
  ],
 
})
export class UpdateBikeShowroomPagePageModule {}
