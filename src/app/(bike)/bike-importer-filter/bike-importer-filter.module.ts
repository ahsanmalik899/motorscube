import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeImporterFilterPageRoutingModule } from './bike-importer-filter-routing.module';

import { BikeImporterFilterPage } from './bike-importer-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeImporterFilterPageRoutingModule
  ],
  declarations: [BikeImporterFilterPage]
})
export class BikeImporterFilterPageModule {}
