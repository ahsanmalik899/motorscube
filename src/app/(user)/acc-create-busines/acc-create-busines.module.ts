import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx'; 
import { AccCreateBusinesPageRoutingModule } from './acc-create-busines-routing.module';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { AccCreateBusinesPage } from './acc-create-busines.page'; // Import the component

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccCreateBusinesPageRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [File]  
  
})
export class AccCreateBusinesPageModule {}
