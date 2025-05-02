import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostMachineryInsurancePageRoutingModule } from './post-machinery-insurance-routing.module';

import { PostMachineryInsurancePage } from './post-machinery-insurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostMachineryInsurancePageRoutingModule
  ],

})
export class PostMachineryInsurancePageModule {}
