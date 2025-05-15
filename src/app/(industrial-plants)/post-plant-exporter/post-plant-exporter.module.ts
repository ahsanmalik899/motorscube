import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPlantExporterPageRoutingModule } from './post-plant-exporter-routing.module';

import { PostPlantExporterPage } from './post-plant-exporter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPlantExporterPageRoutingModule
  ],

})
export class PostPlantExporterPageModule {}
