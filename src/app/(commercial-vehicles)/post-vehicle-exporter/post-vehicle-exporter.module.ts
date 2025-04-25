import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostVehicleExporterPageRoutingModule } from './post-vehicle-exporter-routing.module';

import { PostVehicleExporterPage } from './post-vehicle-exporter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostVehicleExporterPageRoutingModule
  ],

})
export class PostVehicleExporterPageModule {}
