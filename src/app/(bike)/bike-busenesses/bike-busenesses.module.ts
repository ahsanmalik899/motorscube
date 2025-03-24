import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeBusenessesPageRoutingModule } from './bike-busenesses-routing.module';

import { BikeBusenessesPage } from './bike-busenesses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeBusenessesPageRoutingModule
  ],
  declarations: [BikeBusenessesPage]
})
export class BikeBusenessesPageModule {}
