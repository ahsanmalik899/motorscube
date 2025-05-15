import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPlantSchoolPageRoutingModule } from './post-plant-school-routing.module';

import { PostPlantSchoolPage } from './post-plant-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPlantSchoolPageRoutingModule
  ],

})
export class PostPlantSchoolPageModule {}
