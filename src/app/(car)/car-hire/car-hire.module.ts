import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CarHirePageRoutingModule } from './car-hire-routing.module';

import { CarHirePage } from './car-hire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarHirePageRoutingModule
  ],
  declarations: [CarHirePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarHirePageModule {}
