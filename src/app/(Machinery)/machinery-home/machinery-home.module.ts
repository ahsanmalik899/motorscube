import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryHomePageRoutingModule } from './machinery-home-routing.module';

import { MachineryHomePage } from './machinery-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryHomePageRoutingModule
  ],
  
})
export class MachineryHomePageModule {}
