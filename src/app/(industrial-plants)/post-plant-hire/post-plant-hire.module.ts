import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPlantHirePageRoutingModule } from './post-plant-hire-routing.module';

import { PostPlantHirePage } from './post-plant-hire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPlantHirePageRoutingModule
  ],
  declarations: [PostPlantHirePage]
})
export class PostPlantHirePageModule {}
