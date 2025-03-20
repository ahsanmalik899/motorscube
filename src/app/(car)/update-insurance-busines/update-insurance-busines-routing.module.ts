import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateInsuranceBusinesPage } from './update-insurance-busines.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateInsuranceBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateInsuranceBusinesPageRoutingModule {}
