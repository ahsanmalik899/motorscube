import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMachineryImporterPageRoutingModule } from './update-machinery-importer-routing.module';

import { UpdateMachineryImporterPage } from './update-machinery-importer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMachineryImporterPageRoutingModule
  ],

})
export class UpdateMachineryImporterPageModule {}
