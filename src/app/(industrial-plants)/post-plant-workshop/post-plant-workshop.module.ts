import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPlantWorkshopPageRoutingModule } from './post-plant-workshop-routing.module';

import { PostPlantWorkshopPage } from './post-plant-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPlantWorkshopPageRoutingModule
  ],
  
})
export class PostPlantWorkshopPageModule {}
