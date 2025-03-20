import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateWorkshopBusinesPage } from './update-workshop-busines.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateWorkshopBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateWorkshopBusinesPageRoutingModule {}
