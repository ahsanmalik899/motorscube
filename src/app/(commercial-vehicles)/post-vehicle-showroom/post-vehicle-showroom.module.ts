import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostVehicleShowroomPageRoutingModule } from './post-vehicle-showroom-routing.module';

import { PostVehicleShowroomPage } from './post-vehicle-showroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostVehicleShowroomPageRoutingModule
  ],
  
})
export class PostVehicleShowroomPageModule {}
