import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPlantLeasingPageRoutingModule } from './post-plant-leasing-routing.module';

import { PostPlantLeasingPage } from './post-plant-leasing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPlantLeasingPageRoutingModule
  ],
  
})
export class PostPlantLeasingPageModule {}
