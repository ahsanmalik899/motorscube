import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBikeImporterPagePageRoutingModule } from './update-bike-importer-page-routing.module';

import { UpdateBikeImporterPagePage } from './update-bike-importer-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBikeImporterPagePageRoutingModule
  ],

})
export class UpdateBikeImporterPagePageModule {}
