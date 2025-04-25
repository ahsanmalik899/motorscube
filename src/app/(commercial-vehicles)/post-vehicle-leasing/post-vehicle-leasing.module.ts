import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostVehicleLeasingPageRoutingModule } from './post-vehicle-leasing-routing.module';

import { PostVehicleLeasingPage } from './post-vehicle-leasing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostVehicleLeasingPageRoutingModule
  ],
  
})
export class PostVehicleLeasingPageModule {}
