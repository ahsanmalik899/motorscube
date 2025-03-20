import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsUpgradeHotspotPageRoutingModule } from './ads-upgrade-hotspot-routing.module';

import { AdsUpgradeHotspotPage } from './ads-upgrade-hotspot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdsUpgradeHotspotPageRoutingModule
  ],
  
})
export class AdsUpgradeHotspotPageModule {}
