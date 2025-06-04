import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddMachineryPageRoutingModule } from './add-machinery-routing.module';
import { AddMachineryPage } from './add-machinery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddMachineryPageRoutingModule
  ],
  declarations: [AddMachineryPage]
})
export class AddMachineryPageModule {}
