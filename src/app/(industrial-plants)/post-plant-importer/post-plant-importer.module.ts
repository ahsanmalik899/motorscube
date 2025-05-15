import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPlantImporterPageRoutingModule } from './post-plant-importer-routing.module';

import { PostPlantImporterPage } from './post-plant-importer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPlantImporterPageRoutingModule
  ],
 
})
export class PostPlantImporterPageModule {}
