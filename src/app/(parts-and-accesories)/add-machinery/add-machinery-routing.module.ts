import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMachineryPage } from './add-machinery.page';

const routes: Routes = [
  {
    path: '',
    component: AddMachineryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMachineryPageRoutingModule {}
