import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUpgradeHotspotPageRoutingModule } from './profile-upgrade-hotspot-routing.module';

import { ProfileUpgradeHotspotPage } from './profile-upgrade-hotspot.page';
import {RadioButtonModule} from 'primeng/radiobutton';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUpgradeHotspotPageRoutingModule,
    RadioButtonModule
  ],
  declarations: [ProfileUpgradeHotspotPage]
})
export class ProfileUpgradeHotspotPageModule {}
