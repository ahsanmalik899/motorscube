import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { CarAdHireUpdatePageRoutingModule } from './car-ad-hire-update-routing.module';

import { CarAdHireUpdatePage } from './car-ad-hire-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarAdHireUpdatePageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarAdHireUpdatePageModule {}
