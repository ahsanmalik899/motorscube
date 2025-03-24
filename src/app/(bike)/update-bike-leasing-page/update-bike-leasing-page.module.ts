import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBikeLeasingPagePageRoutingModule } from './update-bike-leasing-page-routing.module';

import { UpdateBikeLeasingPagePage } from './update-bike-leasing-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBikeLeasingPagePageRoutingModule
  ],
 
})
export class UpdateBikeLeasingPagePageModule {}
