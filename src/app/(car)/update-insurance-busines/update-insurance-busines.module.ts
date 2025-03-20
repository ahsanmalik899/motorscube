

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateInsuranceBusinesPageRoutingModule } from './update-insurance-busines-routing.module';

import { UpdateInsuranceBusinesPage } from './update-insurance-busines.page';

import { SharedModule } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    UpdateInsuranceBusinesPageRoutingModule,
    SharedModule,
    HttpClientModule // Add HttpClientModule to imports array
  ],
 
})
export class UpdateInsuranceBusinesPageModule {}

