import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostVehicleHirePageRoutingModule } from './post-vehicle-hire-routing.module';

import { PostVehicleHirePage } from './post-vehicle-hire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostVehicleHirePageRoutingModule
  ],

})
export class PostVehicleHirePageModule {}
