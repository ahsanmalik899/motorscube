import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBikePageRoutingModule } from './add-bike-routing.module';

import { AddBikePage } from './add-bike.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddBikePageRoutingModule
  ],
  declarations: [AddBikePage]
})
export class AddBikePageModule {}
