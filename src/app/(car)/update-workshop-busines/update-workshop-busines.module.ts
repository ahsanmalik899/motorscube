
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateWorkshopBusinesPageRoutingModule } from './update-workshop-busines-routing.module';

import { UpdateWorkshopBusinesPage } from './update-workshop-busines.page';


import { SharedModule } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    UpdateWorkshopBusinesPageRoutingModule,
    SharedModule,
    HttpClientModule // Add HttpClientModule to imports array
  ],
 
})

export class UpdateWorkshopBusinesPageModule {}

