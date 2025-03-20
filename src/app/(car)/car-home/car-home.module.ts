import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CarHomePageRoutingModule } from './car-home-routing.module';

import { CarHomePage } from './car-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarHomePageRoutingModule
  ],
  declarations: [CarHomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class CarHomePageModule {}
