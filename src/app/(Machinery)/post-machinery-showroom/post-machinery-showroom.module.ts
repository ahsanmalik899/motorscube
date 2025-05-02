import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostMachineryShowroomPageRoutingModule } from './post-machinery-showroom-routing.module';

import { PostMachineryShowroomPage } from './post-machinery-showroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostMachineryShowroomPageRoutingModule
  ],
  
})
export class PostMachineryShowroomPageModule {}
