import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikePostImporterBusenessPageRoutingModule } from './bike-post-importer-buseness-routing.module';

import { BikePostImporterBusenessPage } from './bike-post-importer-buseness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikePostImporterBusenessPageRoutingModule
  ],
 
})
export class BikePostImporterBusenessPageModule {}
