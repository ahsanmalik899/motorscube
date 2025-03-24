import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UpdateBikeExporterPagePageRoutingModule } from './update-bike-exporter-page-routing.module';
import { UpdateBikeExporterPagePage } from './update-bike-exporter-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateBikeExporterPagePageRoutingModule
  ],
  declarations: [UpdateBikeExporterPagePage]
})
export class UpdateBikeExporterPagePageModule {}
