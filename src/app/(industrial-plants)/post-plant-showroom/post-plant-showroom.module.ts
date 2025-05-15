import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPlantShowroomPageRoutingModule } from './post-plant-showroom-routing.module';

import { PostPlantShowroomPage } from './post-plant-showroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPlantShowroomPageRoutingModule
  ],
 
})
export class PostPlantShowroomPageModule {}
