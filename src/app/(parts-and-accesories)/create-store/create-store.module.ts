import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateStorePageRoutingModule } from './create-store-routing.module';

import { CreateStorePage } from './create-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
       ReactiveFormsModule,
    CreateStorePageRoutingModule
  ],
  declarations: [CreateStorePage]
})
export class CreateStorePageModule {}
