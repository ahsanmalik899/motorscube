import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikePostWorkshopBusnessPageRoutingModule } from './bike-post-workshop-busness-routing.module';

import { BikePostWorkshopBusnessPage } from './bike-post-workshop-busness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikePostWorkshopBusnessPageRoutingModule
  ],
 
})
export class BikePostWorkshopBusnessPageModule {}
