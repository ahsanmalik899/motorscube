import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMachineryInsurancePage } from './update-machinery-insurance.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMachineryInsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMachineryInsurancePageRoutingModule {}
