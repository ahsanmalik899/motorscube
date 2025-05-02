import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostMachineryImporterPageRoutingModule } from './post-machinery-importer-routing.module';

import { PostMachineryImporterPage } from './post-machinery-importer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostMachineryImporterPageRoutingModule
  ],
 
})
export class PostMachineryImporterPageModule {}
