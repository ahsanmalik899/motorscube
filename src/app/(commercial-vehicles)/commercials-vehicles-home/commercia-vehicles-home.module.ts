import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommerciaVehiclesHomePageRoutingModule } from './commercia-vehicles-home-routing.module';

import { CommerciaVehiclesHomePage } from './commercia-vehicles-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommerciaVehiclesHomePageRoutingModule
  ],

})
export class CommerciaVehiclesHomePageModule {}
