import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMachineryInsurancePage } from './post-machinery-insurance.page';

const routes: Routes = [
  {
    path: '',
    component: PostMachineryInsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostMachineryInsurancePageRoutingModule {}
