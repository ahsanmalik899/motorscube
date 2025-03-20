import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UpdateExporterBusinesPageRoutingModule } from './update-exporter-busines-routing.module';

import { UpdateExporterBusinesPage } from './update-exporter-busines.page';


import { SharedModule } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    UpdateExporterBusinesPageRoutingModule,
    SharedModule,
    HttpClientModule // Add HttpClientModule to imports array
  ],

})
export class UpdateExporterBusinesPageModule {}
