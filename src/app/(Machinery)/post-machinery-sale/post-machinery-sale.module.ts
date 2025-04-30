import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostMachinerySalePageRoutingModule } from './post-machinery-sale-routing.module';

import { PostMachinerySalePage } from './post-machinery-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostMachinerySalePageRoutingModule
  ],

})
export class PostMachinerySalePageModule {}
