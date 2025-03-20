
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { UpdateShowroomBusinesPageRoutingModule } from './update-showroom-busines-routing.module';

import { UpdateShowroomBusinesPage } from './update-showroom-busines.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    UpdateShowroomBusinesPageRoutingModule,
    SharedModule,
    HttpClientModule // Add HttpClientModule to imports array
  ],
  
})

export class UpdateShowroomBusinesPageModule {}
