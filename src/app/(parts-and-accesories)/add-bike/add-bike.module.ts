import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBikePageRoutingModule } from './add-bike-routing.module';

import { AddBikePage } from './add-bike.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBikePageRoutingModule
  ],
  declarations: [AddBikePage]
})
export class AddBikePageModule {}
