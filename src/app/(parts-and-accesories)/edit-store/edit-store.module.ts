import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditStorePageRoutingModule } from './edit-store-routing.module';
import { EditStorePage } from './edit-store.page';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: ':id',  // <-- dynamic parameter
    component: EditStorePage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    IonicModule,
    EditStorePageRoutingModule
  ],
  declarations: [EditStorePage]
})
export class EditStorePageModule {}
