import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioButtonModule } from 'primeng/radiobutton';

import { WalletBundlesPageRoutingModule } from './wallet-bundles-routing.module';

import { WalletBundlesPage } from './wallet-bundles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletBundlesPageRoutingModule,
    RadioButtonModule
  ],
  declarations: [WalletBundlesPage]
})
export class WalletBundlesPageModule {}
