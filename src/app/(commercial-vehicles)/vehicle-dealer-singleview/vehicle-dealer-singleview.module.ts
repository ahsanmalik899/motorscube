import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleDealerSingleviewPageRoutingModule } from './vehicle-dealer-singleview-routing.module';

import { VehicleDealerSingleviewPage } from './vehicle-dealer-singleview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleDealerSingleviewPageRoutingModule
  ],
  declarations: [VehicleDealerSingleviewPage]
})
export class VehicleDealerSingleviewPageModule {}
