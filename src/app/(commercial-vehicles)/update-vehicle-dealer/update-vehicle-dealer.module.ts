import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehicleDealerPageRoutingModule } from './update-vehicle-dealer-routing.module';

import { UpdateVehicleDealerPage } from './update-vehicle-dealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVehicleDealerPageRoutingModule
  ],
  
})
export class UpdateVehicleDealerPageModule {}
