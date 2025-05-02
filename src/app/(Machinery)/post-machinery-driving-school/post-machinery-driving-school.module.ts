import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostMachineryDrivingSchoolPageRoutingModule } from './post-machinery-driving-school-routing.module';

import { PostMachineryDrivingSchoolPage } from './post-machinery-driving-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostMachineryDrivingSchoolPageRoutingModule
  ],
 
})
export class PostMachineryDrivingSchoolPageModule {}
