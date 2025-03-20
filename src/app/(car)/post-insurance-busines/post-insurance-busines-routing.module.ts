import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostInsuranceBusinesPage } from './post-insurance-busines.page';

const routes: Routes = [
  {
    path: '',
    component: PostInsuranceBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostInsuranceBusinesPageRoutingModule {}
