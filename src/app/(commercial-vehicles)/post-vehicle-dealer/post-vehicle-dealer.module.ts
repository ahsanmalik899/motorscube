import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostVehicleDealerPageRoutingModule } from './post-vehicle-dealer-routing.module';

import { PostVehicleDealerPage } from './post-vehicle-dealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostVehicleDealerPageRoutingModule
  ],

})
export class PostVehicleDealerPageModule {}
