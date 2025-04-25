import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostVehicleInsurancePageRoutingModule } from './post-vehicle-insurance-routing.module';

import { PostVehicleInsurancePage } from './post-vehicle-insurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostVehicleInsurancePageRoutingModule
  ],
  
})
export class PostVehicleInsurancePageModule {}
