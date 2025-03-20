import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImporterSingleViewPageRoutingModule } from './importer-single-view-routing.module';

import { ImporterSingleViewPage } from './importer-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImporterSingleViewPageRoutingModule
  ],
  declarations: [ImporterSingleViewPage]
})
export class ImporterSingleViewPageModule {}
