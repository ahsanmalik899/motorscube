

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { UpdateImporterBusinesPageRoutingModule } from './update-importer-busines-routing.module';

import { UpdateImporterBusinesPage } from './update-importer-busines.page';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    UpdateImporterBusinesPageRoutingModule,
    SharedModule,
    HttpClientModule // Add HttpClientModule to imports array
  ],
 
})

export class UpdateImporterBusinesPageModule {}

