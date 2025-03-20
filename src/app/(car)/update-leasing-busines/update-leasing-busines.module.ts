
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateLeasingBusinesPageRoutingModule } from './update-leasing-busines-routing.module';

import { UpdateLeasingBusinesPage } from './update-leasing-busines.page';


import { SharedModule } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    UpdateLeasingBusinesPageRoutingModule,
    SharedModule,
    HttpClientModule // Add HttpClientModule to imports array
  ],
  
})
export class  UpdateLeasingBusinesPageModule {}

