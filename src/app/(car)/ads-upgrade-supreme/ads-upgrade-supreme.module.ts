import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsUpgradeSupremePageRoutingModule } from './ads-upgrade-supreme-routing.module';

import { AdsUpgradeSupremePage } from './ads-upgrade-supreme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdsUpgradeSupremePageRoutingModule
  ],
 
})
export class AdsUpgradeSupremePageModule {}
