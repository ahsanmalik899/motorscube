import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountProfBusinesPageRoutingModule } from './account-prof-busines-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Add this import

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountProfBusinesPageRoutingModule,
    ReactiveFormsModule
  ],

})
export class AccountProfBusinesPageModule {}
