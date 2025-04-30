import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostMachineryHirePageRoutingModule } from './post-machinery-hire-routing.module';

import { PostMachineryHirePage } from './post-machinery-hire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostMachineryHirePageRoutingModule
  ],
  declarations: [PostMachineryHirePage]
})
export class PostMachineryHirePageModule {}
