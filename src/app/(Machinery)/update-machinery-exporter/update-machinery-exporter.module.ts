import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMachineryExporterPageRoutingModule } from './update-machinery-exporter-routing.module';

import { UpdateMachineryExporterPage } from './update-machinery-exporter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMachineryExporterPageRoutingModule
  ],

})
export class UpdateMachineryExporterPageModule {}
