import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartsAndPageRoutingModule } from './parts-and-routing.module';

import { PartsAndPage } from './parts-and.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartsAndPageRoutingModule
  ],
  declarations: [PartsAndPage]
})
export class PartsAndPageModule {}
