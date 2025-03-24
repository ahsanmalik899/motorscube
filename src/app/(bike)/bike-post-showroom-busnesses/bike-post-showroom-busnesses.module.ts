import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikePostShowroomBusnessesPageRoutingModule } from './bike-post-showroom-busnesses-routing.module';

import { BikePostShowroomBusnessesPage } from './bike-post-showroom-busnesses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikePostShowroomBusnessesPageRoutingModule
    
  ],
 
})
export class BikePostShowroomBusnessesPageModule {}
