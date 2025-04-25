import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostVehicleWorkshopPageRoutingModule } from './post-vehicle-workshop-routing.module';

import { PostVehicleWorkshopPage } from './post-vehicle-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostVehicleWorkshopPageRoutingModule
  ],
  
})
export class PostVehicleWorkshopPageModule {}
