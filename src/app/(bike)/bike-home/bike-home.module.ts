import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeHomePageRoutingModule } from './bike-home-routing.module';

import { BikeHomePage } from './bike-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeHomePageRoutingModule
  ],
  
})
export class BikeHomePageModule {}
