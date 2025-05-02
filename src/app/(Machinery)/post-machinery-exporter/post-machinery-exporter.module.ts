import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostMachineryExporterPageRoutingModule } from './post-machinery-exporter-routing.module';

import { PostMachineryExporterPage } from './post-machinery-exporter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostMachineryExporterPageRoutingModule
  ],
  
})
export class PostMachineryExporterPageModule {}
