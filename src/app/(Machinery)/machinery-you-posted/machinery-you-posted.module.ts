import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryYouPostedPageRoutingModule } from './machinery-you-posted-routing.module';

import { MachineryYouPostedPage } from './machinery-you-posted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryYouPostedPageRoutingModule
  ],
  declarations: [MachineryYouPostedPage]
})
export class MachineryYouPostedPageModule {}
